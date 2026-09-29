import Anthropic from "@anthropic-ai/sdk";

import { anthropic, MODEL, SYSTEM_PROMPT } from "@/lib/ai";

export const runtime = "nodejs";

type ChatRequest = {
  messages: Anthropic.MessageParam[];
  system?: string;
};

export async function POST(req: Request) {
  const { messages, system }: ChatRequest = await req.json();

  const stream = anthropic.beta.messages.stream({
    model: MODEL,
    max_tokens: 64000,
    system: system ?? SYSTEM_PROMPT,
    messages,
    output_config: { effort: "low" },
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
  });

  const encoder = new TextEncoder();
  const body = new ReadableStream<Uint8Array>({
    async start(controller) {
      let sentText = false;
      const notice = (text: string) =>
        controller.enqueue(encoder.encode(`${sentText ? "\n\n" : ""}[${text}]`));
      try {
        for await (const event of stream) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            controller.enqueue(encoder.encode(event.delta.text));
            sentText = true;
          }
        }
        const final = await stream.finalMessage();
        if (final.stop_reason === "refusal") {
          notice("Het model weigerde dit verzoek.");
        }
      } catch (error) {
        const message =
          error instanceof Anthropic.AuthenticationError
            ? "Geen geldige ANTHROPIC_API_KEY gevonden (zie .env.example)."
            : error instanceof Anthropic.RateLimitError
              ? "Rate limit bereikt, probeer zo opnieuw."
              : error instanceof Anthropic.APIError
                ? `API-fout ${error.status}: ${error.message}`
                : `AI-verbinding mislukt: ${(error as Error).message}`;
        console.error(error);
        notice(message);
      } finally {
        controller.close();
      }
    },
    cancel() {
      stream.abort();
    },
  });

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
  });
}

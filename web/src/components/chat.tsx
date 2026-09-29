"use client";

import { useRef, useState } from "react";
import type Anthropic from "@anthropic-ai/sdk";
import { ArrowUp, Square } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type Message = { role: "user" | "assistant"; content: string };

export function Chat({
  system,
  placeholder = "Stel een vraag…",
  suggestions = [],
  className,
}: {
  system?: string;
  placeholder?: string;
  suggestions?: string[];
  className?: string;
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  async function send(text: string) {
    const content = text.trim();
    if (!content || busy) return;

    const history: Message[] = [...messages, { role: "user", content }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system,
          messages: history satisfies Anthropic.MessageParam[],
        }),
        signal: controller.signal,
      });
      if (!res.body) throw new Error("Geen antwoord van de server");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let reply = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        reply += decoder.decode(value, { stream: true });
        setMessages([...history, { role: "assistant", content: reply }]);
      }
    } catch (error) {
      if (!controller.signal.aborted) {
        setMessages([
          ...history,
          { role: "assistant", content: `[${(error as Error).message}]` },
        ]);
      }
    } finally {
      setBusy(false);
      abortRef.current = null;
    }
  }

  return (
    <div className={cn("flex h-full flex-col gap-4", className)}>
      <div className="flex-1 space-y-4 overflow-y-auto">
        {messages.length === 0 && suggestions.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <Button key={s} variant="outline" size="sm" onClick={() => send(s)}>
                {s}
              </Button>
            ))}
          </div>
        )}
        {messages.map((m, i) => (
          <div
            key={i}
            className={cn(
              "max-w-[80%] rounded-lg px-4 py-2 text-sm whitespace-pre-wrap",
              m.role === "user" ? "bg-primary text-primary-foreground ml-auto" : "bg-muted",
            )}
          >
            {m.content || (busy && i === messages.length - 1 ? "…" : "")}
          </div>
        ))}
      </div>
      <form
        className="flex items-end gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
        <Textarea
          value={input}
          placeholder={placeholder}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              send(input);
            }
          }}
          className="max-h-40 resize-none"
        />
        {busy ? (
          <Button type="button" size="icon" variant="outline" onClick={() => abortRef.current?.abort()}>
            <Square />
          </Button>
        ) : (
          <Button type="submit" size="icon" disabled={!input.trim()}>
            <ArrowUp />
          </Button>
        )}
      </form>
    </div>
  );
}

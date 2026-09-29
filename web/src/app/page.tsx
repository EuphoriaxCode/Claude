import { Chat } from "@/components/chat";

// Placeholder: replace completely after the briefing (see the root CLAUDE.md).
export default function Home() {
  return (
    <main className="mx-auto flex h-dvh w-full max-w-2xl flex-col gap-6 px-4 py-10">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">Prototype</h1>
        <p className="text-muted-foreground text-sm">
          De starter draait. Test hieronder of de Claude-koppeling werkt.
        </p>
      </header>
      <Chat
        className="min-h-0 flex-1"
        suggestions={["Leg mijn loonbrief uit", "Waarom werd deze betaling geblokkeerd?"]}
      />
    </main>
  );
}

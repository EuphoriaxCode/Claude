# Hackathon starter

Tectonic Hackathon (Kortrijk, 30 Sept 2026, challenge from KBC or SD Worx). The team gets 4 hours (18:30 to 22:30) to deliver a working prototype, a one-page overview and a video pitch of at most 3 minutes, submitted via GitHub. The team speaks Dutch: reply in Dutch.

## Priorities during the event
- Speed over completeness. Build only the one demo flow agreed at kickoff; mock everything else.
- Never break the demo. After the 21:15 feature freeze, only bug fixes, deploy and demo data.
- Visible AI value: the jury should see in a few seconds what the AI does.

## Skills in this repo
- `hackathon-kickoff`: briefing to scoped plan, ideas, task split and design brief. Use first.
- `frontend-design`: every visual design decision. Do a design plan before code; avoid the generic AI look.
- `webapp-testing`: check the demo flow in a real browser (Playwright) before recording.
- `hackathon-deliverables`: one-pager, video script, submission checklist.

## Layout
- `web/`: Next.js 16 (App Router, TypeScript, Tailwind v4, shadcn/ui). Read `web/AGENTS.md`: this Next.js version differs from older training data.
- `web/src/app/api/chat/route.ts`: streaming Claude chat endpoint. The system prompt lives in `web/src/lib/ai.ts`.
- `web/src/components/chat.tsx`: reusable chat UI (`<Chat system=... suggestions=[...] />`).
- `web/src/lib/mock-data.ts`: seeded Belgian demo data (transactions, employees, payslips).
- `docs/`: idea bank, design resources, one-pager and pitch templates.

## Commands (run in `web/`)
- `npm run dev`: dev server on http://localhost:3000
- `npm run build` and `npm run lint`: run both before every push that matters.
- `npx shadcn@latest add <component>`: add shadcn, `@magicui/...` or `@aceternity/...` components.

## Conventions
- UI copy in Dutch unless the challenge says otherwise.
- API keys only in `web/.env.local` (never commit it). `ANTHROPIC_API_KEY` is required for the chat.
- Use sponsor tools where it is cheap (Claude or Google Cloud for AI, ElevenLabs for voice, Aikido for a security scan).

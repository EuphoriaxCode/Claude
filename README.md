# Hackathon starter: Tectonic Hackathon Kortrijk

Starterkit voor een hackathon van 4 uur (challenge van KBC of SD Worx): een draaiende Next.js-site met Claude-chat, Claude-skills die de standaard AI-look vermijden, neppe Belgische demo-data en templates voor de one-pager en de pitchvideo.

## Vandaag doen (op je eigen laptop)
```bash
git clone <deze repo> && cd <repo>/web
npm install
cp .env.example .env.local   # vul ANTHROPIC_API_KEY in
npm run dev                  # open http://localhost:3000 en test de chat
```
- [ ] Iedereen in het team heeft de repo gecloned en `npm run dev` werkt.
- [ ] API keys staan in `web/.env.local` (Anthropic, en eventueel ElevenLabs en Google Cloud).
- [ ] Een Vercel-account is gekoppeld aan GitHub, zodat deployen met één klik gaat.
- [ ] De ideeën in [`docs/ideas.md`](docs/ideas.md) doorgenomen.
- [ ] 2 à 3 inspiratiesites uit [`docs/design-resources.md`](docs/design-resources.md) als bladwijzer gezet.
- [ ] Getest hoe je de video opneemt en monteert.

## Tijdens de hackathon met Claude Code
Open Claude Code in de root van deze repo. De skills in `.claude/skills/` worden automatisch geladen.

| Moment | Vraag aan Claude |
|---|---|
| Na de briefing (18:30) | "Gebruik de hackathon-kickoff skill. Hier is de briefing: ..." |
| Design | "Gebruik de frontend-design skill met deze design brief en deze screenshots: ..." |
| Voor de opname (21:15) | "Test de demo-flow met de webapp-testing skill." |
| Afwerken (21:45) | "Gebruik de hackathon-deliverables skill voor de one-pager en het videoscript." |

## Wat zit erin
| Pad | Inhoud |
|---|---|
| `web/` | Next.js 16, TypeScript, Tailwind v4, shadcn/ui |
| `web/src/app/api/chat/route.ts` | Streamende Claude-chat (pas de systeemprompt aan in `web/src/lib/ai.ts`) |
| `web/src/components/chat.tsx` | Herbruikbare chat-component |
| `web/src/lib/mock-data.ts` | Neppe transacties, werknemers en loonbrieven (vaste seed, dus altijd dezelfde data) |
| `.claude/skills/frontend-design` | Anthropic's skill voor een onderscheidend design (Apache 2.0) |
| `.claude/skills/webapp-testing` | Anthropic's skill om de app in een browser te testen (Apache 2.0) |
| `.claude/skills/hackathon-kickoff` | Van briefing naar een plan in 15 minuten |
| `.claude/skills/hackathon-deliverables` | One-pager, videoscript en checklist om in te dienen |
| `.mcp.json` | shadcn MCP-server, zodat Claude componenten kan opzoeken en toevoegen |
| `docs/` | Ideeënbank, design-bronnen, templates |

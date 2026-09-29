# Design-bronnen: weg van de standaard "AI-site"

## Werkwijze in 10 minuten
1. Zoek 2 à 3 sites die passen bij het onderwerp op een inspiratiesite hieronder (bv. zoek "fintech" of "HR" op Godly of Land-book).
2. Maak screenshots en geef ze aan Claude samen met de design brief uit de `hackathon-kickoff` skill: *"Gebruik de frontend-design skill. Dit is de sfeer die we willen: [screenshots]."*
3. Laat Claude eerst een designplan maken (kleuren, fonts, layout) en keur het goed vóór er code geschreven wordt.
4. Haal kant-en-klare, opvallende componenten uit de libraries hieronder in plaats van alles zelf te bouwen.

## Inspiratie (kijken, niet kopiëren)
| Site | Waarvoor |
|---|---|
| [Godly](https://godly.website) | Strakke, typografisch sterke landingspagina's. Beste bron tegen de "AI-look". |
| [Land-book](https://land-book.com) | Heel grote verzameling landingspagina's, filterbaar per sector. |
| [Awwwards](https://www.awwwards.com) | Awardwinnende sites, erg ambitieus (vaak te veel voor 4 uur, maar goed voor sfeer). |
| [Lapa Ninja](https://www.lapa.ninja) | Landingspagina's, sterk voor conversie-patronen. |
| [Mobbin](https://mobbin.com) | Screens van echte apps (banking-apps, HR-tools). Ideaal om te zien hoe een flow eruitziet. |

## Componenten (kopiëren mag, allemaal shadcn/Tailwind-compatibel)
| Library | Wat | Installeren |
|---|---|---|
| [shadcn/ui](https://ui.shadcn.com) | Basiscomponenten (formulieren, dialogs, tabellen, charts) | `npx shadcn@latest add table dialog chart` |
| [21st.dev](https://21st.dev) | Community-marktplaats met honderden mooie shadcn-componenten en hero's | Kopieer het `npx shadcn add ...` commando van de componentpagina |
| [Magic UI](https://magicui.design) | Geanimeerde componenten (marquees, number tickers, bento grids) | `npx shadcn@latest add @magicui/<naam>` |
| [Aceternity UI](https://ui.aceternity.com) | Opvallende animaties en achtergronden voor landingspagina's | `npx shadcn@latest add @aceternity/<naam>` |

Tip: hou het bij **één** opvallend element (bv. een geanimeerde hero of een live demo bovenaan) en laat de rest rustig. Te veel effecten ogen net wél AI-gegenereerd.

## Fonts en kleuren
- [Google Fonts](https://fonts.google.com) werkt meteen via `next/font/google` in `web/src/app/layout.tsx`.
- [Fontshare](https://www.fontshare.com) heeft gratis fonts met meer karakter.
- [Realtime Colors](https://www.realtimecolors.com) om een palet meteen op een voorbeeldsite te zien.
- [Coolors](https://coolors.co) om snel een palet te genereren.

## Optioneel: 21st.dev Magic MCP
Laat Claude rechtstreeks componenten uit de 21st.dev-bibliotheek genereren. Vraag een API key aan op 21st.dev en volg de installatie-instructies daar. Doe dit **vandaag**, niet tijdens de hackathon.

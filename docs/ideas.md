# Ideeënbank (vóór de hackathon voorbereid)

Gebruik dit tijdens de kickoff om de challenge snel te koppelen aan een idee dat al half uitgedacht is. Voor elk idee staat er wat je in de demo toont en welke neppe data je nodig hebt (`web/src/lib/mock-data.ts`).

## KBC (bank, verzekeraar)

| Idee | Wat de demo toont | Mock data |
|---|---|---|
| Uitleg bij een verdachte transactie | De klant ziet een geblokkeerde betaling en de AI legt in gewone taal uit waarom, en wat de klant nu moet doen | `transactions()` |
| Financiële coach voor jongeren | Een eerste loon komt binnen en de AI stelt een simpel budget voor op basis van echte uitgaven | `transactions()` |
| Cashflow-voorspeller voor kmo's | Een grafiek van de komende 30 dagen met een waarschuwing en een concreet advies | `transactions()` |
| CO₂-voetafdruk van je uitgaven | Uitgaven per categorie omgezet naar CO₂, met één haalbare tip | `transactions()` |
| Toegankelijk bankieren voor senioren | Een stem- of chat-interface die één taak (overschrijving, saldo) stap voor stap begeleidt | Geen |

## SD Worx (HR, payroll)

| Idee | Wat de demo toont | Mock data |
|---|---|---|
| "Leg mijn loonbrief uit" | De werknemer klikt op een regel van de loonbrief en krijgt uitleg in gewone taal | `payslip()`, `employees()` |
| Onboarding-buddy | Een nieuwe werknemer vraagt "wat moet ik deze week doen?" en krijgt een persoonlijk plan | `employees()` |
| HR-beleid Q&A | Een chat die antwoordt op basis van het arbeidsreglement, met bronvermelding | Een kort beleidsdocument als tekst |
| Vroege signalen van verzuim | Een dashboard voor de HR-manager met anonieme trends en een voorstel voor actie. **Privacy centraal zetten.** | `employees()` |
| Interne mobiliteit | Een werknemer krijgt interne vacatures die passen bij zijn of haar skills, met uitleg waarom | `employees()` |

## Werkt voor beide
- **Privacy by design**: toon in de demo expliciet wat de AI wel en niet ziet (bv. namen gemaskeerd).
- **Spraak**: een ElevenLabs-stem die het antwoord voorleest is een snelle wow-factor en gebruikt een sponsor-tool.

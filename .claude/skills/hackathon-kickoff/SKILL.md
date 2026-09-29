---
name: hackathon-kickoff
description: Turn a hackathon challenge briefing into a scoped, buildable plan in under 15 minutes - one user, one problem, one demo flow, a cut list, a team task split and a design brief. Use right after the challenge is announced, or when the team pastes briefing notes, photos of slides or a challenge PDF.
---

# Hackathon kickoff

The team has about 4 hours to build a working prototype, a one-page overview and a video pitch of at most 3 minutes. The jury (people from the sponsor, e.g. KBC or SD Worx) judges mostly on: a clear problem, a demo that visibly works, credible value for their business, and use of the sponsor tools. Your job is to get from briefing to a plan fast, not to be exhaustive.

## Inputs

Whatever the team gives you: typed notes, slide photos, a PDF, the judging criteria. If the judging criteria or submission format are missing, ask for them once. They decide what to optimise.

## Output (keep it on one screen)

1. **Challenge in one sentence**, in the sponsor's own words.
2. **Three idea options**, each as: target user · their painful moment · what the prototype does · why the sponsor cares. At least one "safe" idea (sure to demo well) and one "bold" idea. Check `docs/ideas.md` for ideas prepared before the event.
3. **Recommendation** with the reason, measured against the judging criteria.
4. **The one demo flow**: 3 to 6 steps a person clicks through in the video. Everything outside this flow is cut or mocked.
5. **Cut list**: what you will fake (hardcoded data via `web/src/lib/mock-data.ts`, no auth, no real integrations) and what must be real (usually the AI step and the main screen).
6. **Task split** for the team members present (build / UI / pitch + one-pager), with a checkpoint at the feature freeze.
7. **Design brief** to hand to the `frontend-design` skill: subject, audience, the one job of the main screen, tone, and any brand constraints the sponsor gave.

## Time plan to include

- Now until +20 min: pick the idea, start the one-pager's first three sentences.
- Until 21:15: build the demo flow only.
- 21:15: feature freeze - bug fixes, deploy, demo data only.
- 21:45: record and edit the video, finish the one-pager (see the `hackathon-deliverables` skill).
- 22:15: submit, leaving a buffer before the 22:30 deadline.

## Rules of thumb

- A finished small thing beats an unfinished big thing. If an idea needs more than one external integration, it is too big.
- Prefer ideas where the AI does something the jury can see in a few seconds (explain, summarise, detect, draft).
- Privacy and GDPR are a real concern for both banks and HR companies. One sentence on how the prototype handles personal data scores points.
- Use the sponsors' tools where it is cheap: Claude or Google Cloud for the AI step, ElevenLabs for a voice-over or a voice feature, Aikido to scan the repo before submitting.

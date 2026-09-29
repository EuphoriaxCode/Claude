---
name: hackathon-deliverables
description: Write the hackathon submission deliverables - the one-page overview, the script and shot list for a pitch video of at most 3 minutes, and the final submission checklist. Use when the team is at or near the feature freeze, or asks for the one-pager, the pitch, the video script or the submission.
---

# Hackathon deliverables

Three things must be submitted via GitHub before the deadline: a one-page overview, a working prototype and a video pitch of at most 3 minutes. Base everything on what is actually built. Read the code and the running app; never describe features that do not exist.

## 1. One-page overview

Fill `docs/one-pager-template.md` and save the result as `docs/one-pager.md` (and export to PDF if the organisers ask for it). Rules:
- Fits on one A4 page: roughly 350 to 450 words.
- The first paragraph states the problem for one concrete user, with a number if the sponsor gave one.
- "How it works" describes the demo flow in 3 to 5 steps, in user language.
- Include one sentence on personal data and privacy.
- End with impact for the sponsor (time or money saved, customers helped) and realistic next steps.

## 2. Video pitch (max 3:00)

Fill `docs/pitch-script-template.md` and save the result as `docs/pitch-script.md`. Rules:
- Aim for 2:40 so there is margin. Spoken Dutch runs at about 130 words per minute, so the whole script is at most about 350 words.
- 0:00 to 0:25 hook and problem, 0:25 to 2:15 live demo of the one flow, 2:15 to 2:50 impact, privacy, what is next.
- Give a shot list: for every section, what is on screen (app screen, one-pager, face cam).
- Recording tip: record the demo once as a screen recording without audio, then record the voice-over separately (optionally with ElevenLabs) and put them together in CapCut or iMovie. That is faster than getting one perfect take.

## 3. Submission checklist

Walk the team through this list and tick it off:
- [ ] The repo is pushed to GitHub and the README says how to run it and what the prototype does.
- [ ] No secrets in the repo (`.env` is ignored, no keys in code). Run a scan with Aikido if there is time.
- [ ] The demo works from a clean start (or the deployed URL works in a private browser window).
- [ ] The one-pager is in the repo and exported to the requested format.
- [ ] The video is at most 3:00, the audio is clear and the link or file is uploaded.
- [ ] Everything is submitted at 22:15, with a buffer before the 22:30 deadline.

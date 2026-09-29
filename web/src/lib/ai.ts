import Anthropic from "@anthropic-ai/sdk";

export const anthropic = new Anthropic();

export const MODEL = process.env.ANTHROPIC_MODEL ?? "claude-opus-5-5";

// Rewrite this after the briefing: who is the user, what does the assistant help with, which tone.
export const SYSTEM_PROMPT = `Je bent een behulpzame assistent in een prototype.
Antwoord in de taal van de gebruiker, kort en concreet.`;

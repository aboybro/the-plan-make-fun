import { mkdirSync, writeFileSync } from "node:fs";

const PLAN =
  "Sell a 24h AI receptionist to dental clinics, $249. Day 1: list 200 clinics on Google Maps; email 50 owners a demo call (Twilio+Vapi). Clinic forwards its number; the bot books appointments. Clinics pay $300+/month for answering, miss ~30% of calls. Likely 2 installs: ~$440 net.";

mkdirSync("/output", { recursive: true });
// The text is a fixed constant, so every run writes byte-identical output.
writeFileSync("/output/entry.txt", PLAN, "utf8");

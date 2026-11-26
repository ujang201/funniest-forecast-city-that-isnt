// Funniest Forecast for a City That Isn't — Wobbleford weather desk.
//
// The forecast is assembled from three bulletin parts — the place, the
// precipitation, and the wind — then checked against the gate (1–120
// characters, one line, no trailing whitespace) before it is sealed into
// /output/entry.txt. The joke lives in the weather itself: in Wobbleford
// it rains gravy, breakfast is a weather event, and even the wind is polite.
import { mkdirSync, writeFileSync } from "node:fs";

const CITY = "Wobbleford";

const PRECIPITATION = "light drizzle of gravy";
const OUTLOOK = "heavy chance of second breakfast";
const WIND = "winds that apologize for being late";
const PUNCTUATION = ".";

const FORECAST = `${CITY}: ${PRECIPITATION}, ${OUTLOOK}, and ${WIND}${PUNCTUATION}`;

if (FORECAST.length < 1 || FORECAST.length > 120) {
  throw new Error(`forecast is ${FORECAST.length} characters, must be 1-120`);
}
if (FORECAST.trim() !== FORECAST || FORECAST.includes("\n")) {
  throw new Error("forecast must be a single clean line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORECAST, "utf8");
console.log(FORECAST);

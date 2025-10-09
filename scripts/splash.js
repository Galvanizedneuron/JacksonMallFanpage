// splash.js

// List of splashes
const splashes = [
  "Hello, World!",
  "Free Palestine!",
  "God's in his heaven, all's right with the world.",
  "Aromanticism is the greatest!",
  "You can see the page, I suppose.",
  "I'll never be your beast of burden",
  "Go play Silksong, you loser.",
  "This website is 100% kinda gay!",
  "Use Linux cuz I like it and you should too.",
  "Go watch Neon Genesis Evangelion.",
  "THIS IS WHY WE CLASH!",
  "Warrior Girl Unearthed sucks balls.",
  "Now with an AI chatbot!",
  "Frieren is the GOAT.",
  "Goguardian is spyware.",
  "Frick BVSD IT department",
  "But tell me, Shoya, why would you wanna kill yourself?",
  "Watching A Silent Voice is the best way to spend 2 hours today.",
  "Torrent the whole world!",
  "Don't kill yourself!",
  "Why are you reading the splash text on a fanpage?",
  "Digital footprints aren't real.",
  "100% Communist Death Machine.",
  "Go volunteer somewhere, you bum!",
  "Dogs are better than cats.",
  "Corparatism is boring...Choose FOSS",
  "It is a strange world where Hypr-chan exists."
];

// Get day of year (0–365)
const now = new Date();
const start = new Date(now.getFullYear(), 0, 0);
const diff = now - start;
const oneDay = 1000 * 60 * 60 * 24;
const dayOfYear = Math.floor(diff / oneDay);

// Pick a splash deterministically for the day
const splash = splashes[dayOfYear % splashes.length];

// Display it (after DOM is ready)
window.addEventListener("DOMContentLoaded", () => {
  const splashEl = document.getElementById("splash");
  if (splashEl) splashEl.textContent = splash;
});

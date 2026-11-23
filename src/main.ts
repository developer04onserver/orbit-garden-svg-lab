import { characters } from "./catalog";
import { filterCharacters } from "./lib/filters";
import { randomItem } from "./lib/random";
import "./styles.css";

const $ = <T extends HTMLElement>(selector: string): T => {
  const node = document.querySelector<T>(selector);
  if (!node) throw new Error("Missing required interface element: " + selector);
  return node;
};
const grid = $<HTMLDivElement>("#grid");
const search = $<HTMLInputElement>("#search");
const mood = $<HTMLSelectElement>("#mood");
const shuffle = $<HTMLButtonElement>("#shuffle");
const motion = $<HTMLButtonElement>("#motion");
const count = $<HTMLParagraphElement>("#count");
const empty = $<HTMLDivElement>("#empty");
let selectedId: string | undefined;
let paused = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function syncSvgPlayback(object: HTMLObjectElement): void {
  const svg = object.contentDocument?.documentElement as SVGSVGElement | undefined;
  if (!svg || typeof svg.pauseAnimations !== "function") return;
  if (paused) svg.pauseAnimations();
  else svg.unpauseAnimations();
}

function makeCard(character: (typeof characters)[number], index: number): HTMLElement {
  const card = document.createElement("article");
  card.className = "card";
  card.dataset.id = character.id;
  card.style.setProperty("--tone", character.primary);
  card.style.setProperty("--accent", character.accent);
  const link = document.createElement("a");
  link.href = "#character-" + character.id;
  link.className = "card-link";
  link.setAttribute("aria-label", "Meet " + character.name + ", the " + character.mood + " companion");
  const art = document.createElement("div");
  art.className = "art";
  const image = document.createElement("object");
  image.className = "character-svg";
  image.data = character.src;
  image.type = "image/svg+xml";
  image.setAttribute("role", "img");
  image.setAttribute("aria-label", character.name);
  image.width = "132"; image.height = "132";
  image.addEventListener("load", () => syncSvgPlayback(image));
  art.append(image);
  const meta = document.createElement("div");
  meta.className = "meta";
  const title = document.createElement("h3");
  title.textContent = character.name;
  const tag = document.createElement("span");
  tag.className = "tag";
  tag.textContent = character.mood;
  meta.append(title, tag);
  const number = document.createElement("span");
  number.className = "number";
  number.textContent = String(index + 1).padStart(2, "0");
  link.append(art, meta, number);
  link.addEventListener("click", () => {
    selectedId = character.id;
    grid.querySelectorAll(".card.selected").forEach(node => node.classList.remove("selected"));
    card.classList.add("selected");
  });
  card.append(link);
  return card;
}

function render(): void {
  const visible = filterCharacters(characters, search.value, mood.value);
  grid.replaceChildren(...visible.map(character => makeCard(character, characters.indexOf(character))));
  grid.hidden = visible.length === 0;
  empty.hidden = visible.length !== 0;
  count.textContent = visible.length === characters.length
    ? "Showing all " + characters.length + " companions"
    : "Showing " + visible.length + " of " + characters.length + " companions";
}

function setPaused(value: boolean): void {
  paused = value;
  document.documentElement.classList.toggle("paused", value);
  motion.setAttribute("aria-pressed", String(value));
  motion.textContent = value ? "▶ Resume motion" : "Ⅱ Pause motion";
  document.querySelectorAll<HTMLObjectElement>("object.character-svg, object.hero-character").forEach(syncSvgPlayback);
}

search.addEventListener("input", render);
mood.addEventListener("change", render);
shuffle.addEventListener("click", () => {
  const current = characters.find(item => item.id === selectedId);
  const next = randomItem(characters, current);
  if (!next) return;
  search.value = ""; mood.value = "all"; render(); selectedId = next.id;
  const card = grid.querySelector<HTMLElement>('[data-id="' + next.id + '"]');
  card?.classList.add("selected");
  card?.scrollIntoView({ behavior: paused ? "auto" : "smooth", block: "center" });
  card?.querySelector("a")?.focus({ preventScroll: true });
});
motion.addEventListener("click", () => setPaused(!paused));
document.addEventListener("keydown", event => {
  if (event.key === "/" && document.activeElement !== search && !event.ctrlKey && !event.metaKey && !event.altKey) {
    event.preventDefault(); search.focus();
  }
  if (event.key === "Escape" && document.activeElement === search) {
    search.value = ""; search.blur(); render();
  }
});
window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change", event => {
  if (event.matches) setPaused(true);
});
setPaused(paused);
render();

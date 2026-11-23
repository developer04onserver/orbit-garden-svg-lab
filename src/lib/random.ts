export function randomItem<T>(items: readonly T[], excluded?: T): T | undefined {
  const candidates = excluded === undefined ? items : items.filter(item => item !== excluded);
  if (!candidates.length) return undefined;
  if (globalThis.crypto && typeof globalThis.crypto.getRandomValues === "function") {
    const value = new Uint32Array(1);
    globalThis.crypto.getRandomValues(value);
    return candidates[value[0]! % candidates.length];
  }
  return candidates[Math.floor(Math.random() * candidates.length)];
}

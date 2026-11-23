import { describe, expect, it } from "vitest";
import { characters } from "../src/catalog";
import { filterCharacters } from "../src/lib/filters";
import { randomItem } from "../src/lib/random";

describe("character catalogue", () => {
  it("contains thirty unique entries", () => { expect(characters).toHaveLength(30); expect(new Set(characters.map(item => item.id)).size).toBe(30); });
  it("matches names without case sensitivity", () => { expect(filterCharacters(characters, "NOVA", "all").map(item => item.id)).toEqual(["nova"]); });
  it("filters by mood", () => { expect(filterCharacters(characters, "", "sleepy").map(item => item.name)).toEqual(["Miso"]); });
  it("combines text and mood filters", () => { expect(filterCharacters(characters, "curious", "curious")).toHaveLength(1); expect(filterCharacters(characters, "curious", "sleepy")).toHaveLength(0); });
  it("returns no results for unknown terms", () => { expect(filterCharacters(characters, "unknown", "all")).toEqual([]); });
});
describe("randomItem", () => {
  it("returns undefined for an empty collection", () => { expect(randomItem([])).toBeUndefined(); });
  it("returns an item from the collection", () => { const values = ["a", "b", "c"] as const; expect(values).toContain(randomItem(values)); });
  it("avoids the excluded item if alternatives exist", () => { const values = ["a", "b"] as const; expect(randomItem(values, "a")).toBe("b"); });
});

import type { Character } from "../catalog";

export function filterCharacters(items: readonly Character[], query: string, mood: string): Character[] {
  const normalized = query.trim().toLocaleLowerCase();
  return items.filter(character => {
    const matchesMood = mood === "all" || character.mood === mood;
    const searchable = (character.name + " " + character.mood + " " + character.description).toLocaleLowerCase();
    return matchesMood && (!normalized || searchable.includes(normalized));
  });
}

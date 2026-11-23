export interface Character {
  readonly id: string; readonly name: string; readonly mood: string;
  readonly primary: string; readonly accent: string;
  readonly description: string; readonly src: string;
}

export const characters: readonly Character[] = [
  { id: "nova", name: "Nova", mood: "curious", primary: "#8b5cf6", accent: "#c4b5fd", description: "Nova is a curious little cosmic companion, ready to brighten your workspace.", src: "./characters/nova.svg" },
  { id: "pip", name: "Pip", mood: "playful", primary: "#06b6d4", accent: "#a5f3fc", description: "Pip is a playful little cosmic companion, ready to brighten your workspace.", src: "./characters/pip.svg" },
  { id: "miso", name: "Miso", mood: "sleepy", primary: "#f59e0b", accent: "#fde68a", description: "Miso is a sleepy little cosmic companion, ready to brighten your workspace.", src: "./characters/miso.svg" },
  { id: "zuzu", name: "Zuzu", mood: "bold", primary: "#f43f5e", accent: "#fda4af", description: "Zuzu is a bold little cosmic companion, ready to brighten your workspace.", src: "./characters/zuzu.svg" },
  { id: "orbit", name: "Orbit", mood: "dreamy", primary: "#3b82f6", accent: "#93c5fd", description: "Orbit is a dreamy little cosmic companion, ready to brighten your workspace.", src: "./characters/orbit.svg" },
  { id: "kiki", name: "Kiki", mood: "cheerful", primary: "#10b981", accent: "#a7f3d0", description: "Kiki is a cheerful little cosmic companion, ready to brighten your workspace.", src: "./characters/kiki.svg" },
  { id: "ember", name: "Ember", mood: "fiery", primary: "#ea580c", accent: "#fdba74", description: "Ember is a fiery little cosmic companion, ready to brighten your workspace.", src: "./characters/ember.svg" },
  { id: "luma", name: "Luma", mood: "gentle", primary: "#d946ef", accent: "#f0abfc", description: "Luma is a gentle little cosmic companion, ready to brighten your workspace.", src: "./characters/luma.svg" },
  { id: "byte", name: "Byte", mood: "focused", primary: "#64748b", accent: "#cbd5e1", description: "Byte is a focused little cosmic companion, ready to brighten your workspace.", src: "./characters/byte.svg" },
  { id: "boba", name: "Boba", mood: "bubbly", primary: "#ec4899", accent: "#f9a8d4", description: "Boba is a bubbly little cosmic companion, ready to brighten your workspace.", src: "./characters/boba.svg" },
  { id: "aster", name: "Aster", mood: "cosmic", primary: "#6366f1", accent: "#c7d2fe", description: "Aster is a cosmic little cosmic companion, ready to brighten your workspace.", src: "./characters/aster.svg" },
  { id: "momo", name: "Momo", mood: "shy", primary: "#84cc16", accent: "#d9f99d", description: "Momo is a shy little cosmic companion, ready to brighten your workspace.", src: "./characters/momo.svg" },
  { id: "pixel", name: "Pixel", mood: "clever", primary: "#0d9488", accent: "#99f6e4", description: "Pixel is a clever little cosmic companion, ready to brighten your workspace.", src: "./characters/pixel.svg" },
  { id: "tango", name: "Tango", mood: "energetic", primary: "#dc2626", accent: "#fca5a5", description: "Tango is a energetic little cosmic companion, ready to brighten your workspace.", src: "./characters/tango.svg" },
  { id: "suki", name: "Suki", mood: "kind", primary: "#a855f7", accent: "#e9d5ff", description: "Suki is a kind little cosmic companion, ready to brighten your workspace.", src: "./characters/suki.svg" },
  { id: "echo", name: "Echo", mood: "mysterious", primary: "#475569", accent: "#94a3b8", description: "Echo is a mysterious little cosmic companion, ready to brighten your workspace.", src: "./characters/echo.svg" },
  { id: "wisp", name: "Wisp", mood: "floaty", primary: "#38bdf8", accent: "#bae6fd", description: "Wisp is a floaty little cosmic companion, ready to brighten your workspace.", src: "./characters/wisp.svg" },
  { id: "ringo", name: "Ringo", mood: "friendly", primary: "#ca8a04", accent: "#fef08a", description: "Ringo is a friendly little cosmic companion, ready to brighten your workspace.", src: "./characters/ringo.svg" },
  { id: "pebble", name: "Pebble", mood: "steady", primary: "#78716c", accent: "#d6d3d1", description: "Pebble is a steady little cosmic companion, ready to brighten your workspace.", src: "./characters/pebble.svg" },
  { id: "juno", name: "Juno", mood: "brave", primary: "#7c3aed", accent: "#ddd6fe", description: "Juno is a brave little cosmic companion, ready to brighten your workspace.", src: "./characters/juno.svg" },
  { id: "sprout", name: "Sprout", mood: "hopeful", primary: "#16a34a", accent: "#bbf7d0", description: "Sprout is a hopeful little cosmic companion, ready to brighten your workspace.", src: "./characters/sprout.svg" },
  { id: "cosmo", name: "Cosmo", mood: "wondering", primary: "#2563eb", accent: "#bfdbfe", description: "Cosmo is a wondering little cosmic companion, ready to brighten your workspace.", src: "./characters/cosmo.svg" },
  { id: "fizz", name: "Fizz", mood: "excited", primary: "#db2777", accent: "#fbcfe8", description: "Fizz is a excited little cosmic companion, ready to brighten your workspace.", src: "./characters/fizz.svg" },
  { id: "tiki", name: "Tiki", mood: "sunny", primary: "#eab308", accent: "#fef9c3", description: "Tiki is a sunny little cosmic companion, ready to brighten your workspace.", src: "./characters/tiki.svg" },
  { id: "pluto", name: "Pluto", mood: "quiet", primary: "#334155", accent: "#cbd5e1", description: "Pluto is a quiet little cosmic companion, ready to brighten your workspace.", src: "./characters/pluto.svg" },
  { id: "doodle", name: "Doodle", mood: "artsy", primary: "#f97316", accent: "#fed7aa", description: "Doodle is a artsy little cosmic companion, ready to brighten your workspace.", src: "./characters/doodle.svg" },
  { id: "koda", name: "Koda", mood: "loyal", primary: "#0891b2", accent: "#a5f3fc", description: "Koda is a loyal little cosmic companion, ready to brighten your workspace.", src: "./characters/koda.svg" },
  { id: "yuki", name: "Yuki", mood: "calm", primary: "#7dd3fc", accent: "#e0f2fe", description: "Yuki is a calm little cosmic companion, ready to brighten your workspace.", src: "./characters/yuki.svg" },
  { id: "ravi", name: "Ravi", mood: "radiant", primary: "#f59e0b", accent: "#fde68a", description: "Ravi is a radiant little cosmic companion, ready to brighten your workspace.", src: "./characters/ravi.svg" },
  { id: "zest", name: "Zest", mood: "zippy", primary: "#84cc16", accent: "#d9f99d", description: "Zest is a zippy little cosmic companion, ready to brighten your workspace.", src: "./characters/zest.svg" },
] as const;

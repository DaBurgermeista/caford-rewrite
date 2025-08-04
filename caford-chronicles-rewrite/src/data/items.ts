// data/items.ts
import { Item } from "@/types/items";

export const ITEMS: Item[] = [
  {
    id: "iron-sword",
    name: "Iron Sword",
    description: "A basic blade. Increases strength.",
    type: "weapon",
    bonuses: { strength: 2 },
  },
  {
    id: "apprentice-robe",
    name: "Apprentice Robe",
    description: "Provides slight magical protection.",
    type: "armor",
    bonuses: { mana: 10, intelligence: 1 },
  },
];

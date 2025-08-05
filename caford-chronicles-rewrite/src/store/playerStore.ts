import { create } from "zustand";
import { useInventoryStore } from "@/store/inventoryStore";
import { ITEMS } from "@/data/items";

export type CharacterClass = "Warrior" | "Mage" | "Rogue";

export type Player = {
  name: string;
  class: CharacterClass;
  level: number;
  health: number;
  mana: number;
  stats: {
    strength: number;
    agility: number;
    intelligence: number;
  };
};

type PlayerStore = {
  player: Player | null;
  createPlayer: (name: string, charClass: CharacterClass) => void;
  resetPlayer: () => void;
};

export const getTotalStats = () => {
  const player = usePlayerStore.getState().player;
  const equipped = useInventoryStore.getState().equipped;

  if (!player) return null;

  const bonusStats = Object.values(equipped).reduce(
    (acc, item) => {
      if (!item?.bonuses) return acc;
      Object.entries(item.bonuses).forEach(([key, val]) => {
        acc[key as keyof typeof acc] += val ?? 0;
      });
      return acc;
    },
    { strength: 0, agility: 0, intelligence: 0, health: 0, mana: 0 }
  );

  return {
    ...player.stats,
    strength: player.stats.strength + bonusStats.strength,
    agility: player.stats.agility + bonusStats.agility,
    intelligence: player.stats.intelligence + bonusStats.intelligence,
    health: player.health + bonusStats.health,
    mana: player.mana + bonusStats.mana,
  };
};

export const usePlayerStore = create<PlayerStore>((set) => ({
  player: null,

  createPlayer: (name: string, charClass: CharacterClass) => {
    const baseStats = {
      Warrior: { strength: 10, agility: 4, intelligence: 2 },
      Mage: { strength: 2, agility: 4, intelligence: 10 },
      Rogue: { strength: 4, agility: 10, intelligence: 2 },
    };

    set({
      player: {
        name,
        class: charClass,
        level: 1,
        health: 100,
        mana: 50,
        stats: baseStats[charClass],
      },
    });
    const starterItem = ITEMS.find((item) => item.id === "iron-sword");
    if (starterItem) {
      useInventoryStore.getState().addItem(starterItem);
    }
  },

  resetPlayer: () => set({ player: null }),
}));

import { create } from "zustand";

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
  },

  resetPlayer: () => set({ player: null }),
}));

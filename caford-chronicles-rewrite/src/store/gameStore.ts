import { create } from "zustand";

export type GameState = "idle" | "narrating" | "waitingForInput" | "combat" | "gameOver";

type GameStore = {
  state: GameState;
  setState: (s: GameState) => void;
  log: string[];
  addLog: (msg: string) => void;
  turnCounter: number;
  nextTurn: () => void;
};

export const useGameStore = create<GameStore>((set) => ({
  state: "idle",

  setState: (s) => set({ state: s }),

  log: [],

  addLog: (msg) =>
    set((state) => ({
      log: [...state.log, `[Turn ${state.turnCounter}]: ${msg}`],
    })),

  turnCounter: 1,

  nextTurn: () =>
    set((state) => ({
      turnCounter: state.turnCounter + 1,
      state: "waitingForInput",
    })),
}));

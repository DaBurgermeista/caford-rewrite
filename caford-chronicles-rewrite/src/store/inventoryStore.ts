// stores/inventoryStore.ts
import { create } from "zustand";
import { Item } from "@/types/items";

type EquipmentSlots = {
  weapon: Item | null;
  armor: Item | null;
  accessory: Item | null;
};

type InventoryStore = {
  items: Item[];
  equipped: EquipmentSlots;
  addItem: (item: Item) => void;
  equipItem: (item: Item) => void;
  unequipItem: (slot: keyof EquipmentSlots) => void;
};

export const useInventoryStore = create<InventoryStore>((set) => ({
  items: [],
  equipped: {
    weapon: null,
    armor: null,
    accessory: null,
  },
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  equipItem: (item) =>
    set((state) => {
      if (item.type === "consumable") return state; // skip consumables
      const slot = item.type as keyof EquipmentSlots;
      return {
        equipped: {
          ...state.equipped,
          [slot]: item,
        },
      };
    }),
  unequipItem: (slot) =>
    set((state) => ({
      equipped: { ...state.equipped, [slot]: null },
    })),
}));

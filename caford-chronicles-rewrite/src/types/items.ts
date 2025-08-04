// types/items.ts

export type StatBonus = {
  strength?: number;
  agility?: number;
  intelligence?: number;
  health?: number;
  mana?: number;
};

export type ItemType = "weapon" | "armor" | "accessory" | "consumable";

export type Item = {
  id: string;
  name: string;
  description: string;
  type: ItemType;
  bonuses?: StatBonus;
};

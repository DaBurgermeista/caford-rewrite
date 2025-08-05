import { useState } from "react";
import { TiShoppingBag } from "react-icons/ti";
import { BsJournal } from "react-icons/bs";
import { IoIosStats } from "react-icons/io";
import Modal from "@/components/GameUI/Modal";
import { getTotalStats, usePlayerStore } from "@/store/playerStore";
import InventoryPanel from "@/components/InventoryPanel";

export default function Sidebar() {
  const [activeModal, setActiveModal] = useState<"stats" | "inventory" | null>(
    null
  );
  const player = usePlayerStore((s) => s.player);
  const totalStats = getTotalStats();

  return (
    <>
      <aside className="w-48 bg-stone-950 p-4 border-r border-stone-700 flex flex-col space-y-2">
        <button
          onClick={() => setActiveModal("inventory")}
          className="hover:bg-stone-800 px-2 py-1 rounded text-left"
        >
          <TiShoppingBag />
          Inventory
        </button>
        <button
          onClick={() => setActiveModal("stats")}
          className="hover:bg-stone-800 px-2 py-1 rounded text-left"
        >
          <IoIosStats />
          Stats
        </button>
        <button className="hover:bg-stone-800 px-2 py-1 rounded text-left">
          <BsJournal />
          Quests
        </button>
      </aside>
      {activeModal === "stats" && (
        <Modal isOpen onClose={() => setActiveModal(null)} title="Stats">
          <p>Name: {player?.name}</p>
          <p>Class: {player?.class}</p>
          <p>Level: {player?.level}</p>
          <p>HP: {totalStats?.health}</p>
          <p>MP: {totalStats?.mana}</p>
          <div className="mt-4">
            <p>STR: {totalStats?.strength}</p>
            <p>AGI: {totalStats?.agility}</p>
            <p>INT: {totalStats?.intelligence}</p>
          </div>
        </Modal>
      )}
      {activeModal === "inventory" && (
        <Modal isOpen onClose={() => setActiveModal(null)} title="Inventory">
          <InventoryPanel />
        </Modal>
      )}
    </>
  );
}

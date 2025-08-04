import { useState } from "react";
import Modal from "./Modal";
import { usePlayerStore } from "@/store/playerStore";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const player = usePlayerStore((s) => s.player);

  return (
    <>
      <aside className="w-48 bg-stone-950 p-4 border-r border-stone-700 flex flex-col space-y-2">
        <button className="hover:bg-stone-800 px-2 py-1 rounded text-left">
          Inventory
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className="hover:bg-stone-800 px-2 py-1 rounded text-left"
        >
          Stats
        </button>
        <button className="hover:bg-stone-800 px-2 py-1 rounded text-left">
          Quests
        </button>
      </aside>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Stats</h2>
        <p>Name: {player?.name}</p>
        <p>Class: {player?.class}</p>
        <p>Level: {player?.level}</p>
        <p>HP: {player?.health}</p>
        <p>MP: {player?.mana}</p>
        <div className="mt-4">
          <p>STR: {player?.stats.strength}</p>
          <p>AGI: {player?.stats.agility}</p>
          <p>INT: {player?.stats.intelligence}</p>
        </div>
      </Modal>
    </>
  );
}

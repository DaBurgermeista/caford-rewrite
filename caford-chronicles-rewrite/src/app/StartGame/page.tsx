"use client";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { CharacterClass, usePlayerStore } from "@/store/playerStore";
import ClassList from "@/components/CharacterSelect/ClassList";
import SelectedClass from "@/components/CharacterSelect/SelectedClass";

export default function StartGame() {
  const router = useRouter();
  const player = usePlayerStore((s) => s.player);
  const createPlayer = usePlayerStore((s) => s.createPlayer);
  const [name, setName] = useState<string>("");

  return (
    <div className="font-press grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h2 className="text-4xl font-bold mb-4">Start Game</h2>
      <p className="font-vt text-lg text-center max-w-2xl mb-8">
        Choose your character class to begin your adventure!
      </p>
      <input
        type="text"
        placeholder="Enter your character's name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-6 px-4 py-2 rounded bg-black border border-gray-700 text-white font-vt text-center placeholder-gray-500"
      />
      <ClassList
        classes={[
          { name: "Warrior", description: "Melee combat specialist." },
          { name: "Mage", description: "Arcane spellcaster." },
          { name: "Rogue", description: "Stealth and speed expert." },
        ]}
        selected={player?.class || null}
        onSelect={(charClass) => {
          if (name.trim().length > 0) {
            createPlayer(name, charClass as CharacterClass);
            router.push("/Game");
          } else {
            toast.error(
              "Please enter a character name before selecting a class."
            );
          }
        }}
      />

      {player && <SelectedClass selected={player.class} />}
    </div>
  );
}

import { usePlayerStore } from "@/store/playerStore";

export default function TopBar() {
  const player = usePlayerStore((s) => s.player);

  return (
    <div className="w-full bg-stone-900 text-white px-4 py-2 flex justify-between items-center text-sm border-b border-stone-700">
      <span>Name: {player?.name || "???"}</span>
      <span>Class: {player?.class || "???"}</span>
      <span>
        HP: {player?.health} | MP: {player?.mana}
      </span>
    </div>
  );
}

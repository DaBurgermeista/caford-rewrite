import { useGameStore } from "@/store/gameStore";

export default function BottomBar() {
  const { state } = useGameStore();

  const hints: Record<typeof state, string> = {
    idle: "Initializing...",
    waitingForInput: "Choose an action or type a command.",
    narrating: "Press enter to continue.",
    combat: "Select a skill or use an item.",
    gameOver: "Game over. Press R to restart.",
  };

  return (
    <footer className="bg-stone-900 px-4 py-2 border-t border-stone-700 text-xs text-muted-foreground">
      {hints[state] || "Awaiting input..."}
    </footer>
  );
}

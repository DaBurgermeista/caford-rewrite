import { useGameStore } from "@/store/gameStore";
import IntroScene from "../../scenes/IntroScene";

export default function MainArea() {
  const { log, addLog, state, nextTurn, setState } = useGameStore();

  // Starting Game Loop
  if (state === "idle") {
    setState("waitingForInput");
    addLog("You awaken in a ruined stone chamber.");
    addLog("A strange voice echoes in your mind...");
  }

  return (
    <main className="flex-1 p-6 overflow-y-auto font-vt">
      <h2 className="text-xl font-bold mb-2">Intro Scene</h2>

      <div className="mb-6 bg-stone-950 p-4 rounded max-h-64 overflow-y-auto text-sm border border-stone-700">
        {log.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      <IntroScene />
    </main>
  );
}

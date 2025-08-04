import { useGameStore } from "@/store/gameStore";

export default function MainArea() {
  const { log, addLog, state, nextTurn, setState } = useGameStore();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Main Game Area</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Current State: {state}
      </p>

      <div className="space-y-2">
        <button
          onClick={() => {
            addLog("You step into the shadows.");
            setState("narrating");
          }}
          className="px-4 py-2 bg-stone-800 rounded hover:bg-stone-700"
        >
          Step Forward
        </button>

        <button
          onClick={() => {
            addLog("You prepare for the next turn.");
            nextTurn();
          }}
          className="px-4 py-2 bg-sky-800 rounded hover:bg-sky-700"
        >
          Next Turn
        </button>
      </div>

      <div className="mt-6 bg-stone-950 p-4 rounded max-h-64 overflow-y-auto text-sm font-mono border border-stone-700">
        {log.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
}

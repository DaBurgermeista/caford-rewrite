"use client";

import { useGameStore } from "@/store/gameStore";
import GameChoiceButton from "../../components/GameUI/GameChoiceButton";

export default function IntroScene() {
  const { state, setState, addLog, nextTurn } = useGameStore();

  const handleChoice = (choice: string) => {
    addLog(`You chose: ${choice}`);

    switch (choice) {
      case "look":
        addLog("Your eyes adjust. Crumbling stone walls... no exits.");
        break;
      case "voice":
        addLog("The voice responds: 'Finally, you're awake.'");
        break;
      case "silent":
        addLog("You remain still. The silence stretches thin.");
        break;
    }

    nextTurn();
  };

  if (state !== "waitingForInput") return null;

  return (
    <div className="mt-4 space-y-2">
      <GameChoiceButton
        label="Look around"
        value="look"
        onSelect={handleChoice}
      />
      <GameChoiceButton
        label="Respond to the voice"
        value="voice"
        onSelect={handleChoice}
      />
      <GameChoiceButton
        label="Stay silent"
        value="silent"
        onSelect={handleChoice}
      />
    </div>
  );
}

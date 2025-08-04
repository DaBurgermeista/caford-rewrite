// components/GameUI/GameChoiceButton.tsx

type GameChoiceButtonProps = {
  label: string;
  value: string;
  onSelect: (value: string) => void;
};

export default function GameChoiceButton({
  label,
  value,
  onSelect,
}: GameChoiceButtonProps) {
  return (
    <button
      onClick={() => onSelect(value)}
      className="px-4 py-2 bg-stone-800 hover:bg-stone-700 rounded w-full text-left transition-colors duration-150"
    >
      {label}
    </button>
  );
}

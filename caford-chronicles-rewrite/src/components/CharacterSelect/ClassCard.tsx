type ClassCardProps = {
  name: string;
  description: string;
  isSelected: boolean;
  onSelect: (name: string) => void;
};

export default function ClassCard({
  name,
  description,
  isSelected,
  onSelect,
}: ClassCardProps) {
  return (
    <button
      onClick={() => onSelect(name)}
      className={`border rounded-xl px-6 py-4 text-left transition-all duration-200 shadow-md
        ${isSelected ? "bg-sky-600 text-white" : "hover:bg-stone-900"}`}
    >
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </button>
  );
}

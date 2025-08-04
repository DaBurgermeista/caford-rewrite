import ClassCard from "./ClassCard";

type CharacterClass = {
  name: string;
  description: string;
};

type ClassListProps = {
  classes: CharacterClass[];
  selected: string | null;
  onSelect: (name: string) => void;
};

export default function ClassList({
  classes,
  selected,
  onSelect,
}: ClassListProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
      {classes.map((charClass) => (
        <ClassCard
          key={charClass.name}
          name={charClass.name}
          description={charClass.description}
          isSelected={selected === charClass.name}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

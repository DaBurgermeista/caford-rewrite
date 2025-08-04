type SelectedClassProps = {
  selected: string;
};

export default function SelectedClass({ selected }: SelectedClassProps) {
  return (
    <div className="mt-10 text-center">
      <p className="text-lg font-medium">
        You have selected: <span className="text-blue-100">{selected}</span>
      </p>
    </div>
  );
}

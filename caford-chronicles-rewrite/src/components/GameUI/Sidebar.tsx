export default function Sidebar() {
  return (
    <aside className="w-48 bg-stone-950 p-4 border-r border-stone-700 flex flex-col space-y-2">
      <button className="hover:bg-stone-800 px-2 py-1 rounded text-left">
        Inventory
      </button>
      <button className="hover:bg-stone-800 px-2 py-1 rounded text-left">
        Stats
      </button>
      <button className="hover:bg-stone-800 px-2 py-1 rounded text-left">
        Quests
      </button>
    </aside>
  );
}

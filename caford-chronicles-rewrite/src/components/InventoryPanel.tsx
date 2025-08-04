// components/InventoryPanel.tsx
"use client";
import { useInventoryStore } from "@/store/inventoryStore";
import { Item } from "@/types/items";

export default function InventoryPanel() {
  const { items, equipped, equipItem, unequipItem } = useInventoryStore();

  const renderItemCard = (item: Item, isEquipped = false) => (
    <div
      key={item.id}
      className={`border p-2 rounded text-xs shadow-sm ${
        isEquipped ? "bg-stone-800 text-white" : "bg-stone-950 text-gray-200"
      }`}
    >
      <p className="font-bold">{item.name}</p>
      <p className="italic text-muted-foreground">{item.description}</p>
      {item.bonuses && (
        <ul className="text-[10px] mt-1">
          {Object.entries(item.bonuses).map(([stat, val]) => (
            <li key={stat}>
              +{val} {stat}
            </li>
          ))}
        </ul>
      )}
      {isEquipped ? (
        <button
          className="mt-2 text-red-400 underline"
          onClick={() => unequipItem(item.type as any)}
        >
          Unequip
        </button>
      ) : (
        <button
          className="mt-2 text-sky-400 underline"
          onClick={() => equipItem(item)}
        >
          Equip
        </button>
      )}
    </div>
  );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6 p-4 bg-stone-900 border rounded-lg">
      <h3 className="col-span-full text-sm text-muted-foreground uppercase tracking-wider">
        Equipped
      </h3>
      {Object.entries(equipped).map(([slot, item]) =>
        item ? (
          renderItemCard(item, true)
        ) : (
          <div
            key={slot}
            className="gap-1 space-y-0.5 border m-2 border-dashed p-2 rounded text-center text-muted-foreground text-[10px] flex flex-col items-center justify-center min-w-[100px] max-w-[100px]
"
          >
            <span className="font-semibold">Empty</span>
            <span className="capitalize break-words max-w-[72px]">{slot}</span>
          </div>
        )
      )}

      <h3 className="col-span-full text-sm mt-4 text-muted-foreground uppercase tracking-wider">
        Inventory
      </h3>
      {items.length ? (
        items.map((item) => renderItemCard(item))
      ) : (
        <p className="col-span-full text-muted-foreground text-xs">Empty</p>
      )}
    </div>
  );
}

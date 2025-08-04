// MainMenu.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-press grid  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Caford Chronicles
        </h1>
        <p className="text-lg text-center max-w-2xl">
          A deep dive into the Caford Chronicles universe, exploring its rich
          lore and captivating stories.
        </p>
        <ul className="mt-4 space-y-4 border rounded-lg p-4 justify-items-center">
          <li>
            <Link
              href="/StartGame"
              className="block px-4 py-2 rounded-md transition-colors duration-200 hover:bg-blue-100 hover:text-blue-700"
            >
              Start Game
            </Link>
          </li>
          <li>
            <Link
              href="/LoadGame"
              className="block px-4 py-2 rounded-md transition-colors duration-200 hover:bg-blue-100 hover:text-blue-700"
            >
              Load Game
            </Link>
          </li>
          <li>
            <Link
              href="/Settings"
              className="block px-4 py-2 rounded-md transition-colors duration-200 hover:bg-blue-100 hover:text-blue-700"
            >
              Settings
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}

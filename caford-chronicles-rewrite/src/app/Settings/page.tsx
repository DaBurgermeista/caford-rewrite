export default function Settings() {
  return (
    <div className="font-press grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h2 className="text-4xl font-bold mb-4">Settings</h2>
      <p className="text-lg text-center max-w-2xl">
        Adjust your game settings here.
      </p>
      <ul className="mt-4 space-y-4 border-1 rounded-lg p-4 justify-items-center">
        <li className="block px-4 py-2 rounded-md transition-colors duration-200 hover:bg-blue-100 hover:text-blue-700">
          Audio Settings
        </li>
        <li className="block px-4 py-2 rounded-md transition-colors duration-200 hover:bg-blue-100 hover:text-blue-700">
          Video Settings
        </li>
        <li className="block px-4 py-2 rounded-md transition-colors duration-200 hover:bg-blue-100 hover:text-blue-700">
          Gameplay Settings
        </li>
      </ul>
    </div>
  );
}

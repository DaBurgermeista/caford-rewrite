export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Caford Chronicles
        </h1>
        <p className="text-lg text-center max-w-2xl">
          A deep dive into the Caford Chronicles universe, exploring its rich
          lore and captivating stories.
        </p>
      </main>
    </div>
  );
}

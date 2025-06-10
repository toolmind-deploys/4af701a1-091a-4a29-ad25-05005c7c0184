export default function HomePage() {
  const petNames = [
    "Fluffy",
    "Sparky",
    "Mr. Whiskers",
    "Bella",
    "Rex"
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">1</h1>
      <ul className="list-disc">
        {petNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}

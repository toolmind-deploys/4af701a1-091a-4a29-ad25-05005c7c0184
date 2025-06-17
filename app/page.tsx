import Link from 'next/link';

export default async function HomePage() {
  // Fetch the home list (or any data) from our custom API endpoint.
  // Using no-store caching to ensure fresh content.
  const res = await fetch('http://localhost:3000/api', { cache: 'no-store' });
  const data = await res.json();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <p className="mb-2">This is the index page. Below is some data from the default API:</p>
      <pre className="bg-gray-100 p-2 rounded mb-4">{JSON.stringify(data, null, 2)}</pre>
      <Link href="/feeds" className="text-blue-500 underline">Go to Feeds</Link>
    </main>
  );
}

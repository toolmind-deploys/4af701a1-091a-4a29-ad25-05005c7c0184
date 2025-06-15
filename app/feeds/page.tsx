import React from 'react';

export default async function FeedsPage() {
  // Fetch the feeds list from our custom API endpoint.
  // Using no-store caching to ensure fresh content.
  const res = await fetch('http://localhost:3000/api/feeds', { cache: 'no-store' });
  const data = await res.json();
  const { feeds } = data;

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Feeds</h1>
      {feeds && feeds.length > 0 ? (
        <ul className="space-y-4">
          {feeds.map((feed: any) => (
            <li key={feed.id} className="border p-4 rounded">
              <div className="mb-2 font-semibold">Title: {feed.title}</div>
              <div className="text-gray-700">Description: {feed.description}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No feeds available.</p>
      )}
    </main>
  );
}

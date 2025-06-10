import React from 'react';

export default async function FeedsPage() {
  // Fetch feeds data from our API route
  const response = await fetch('http://localhost:3000/api/home', {
    cache: 'no-store',
  });

  const { data } = await response.json();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Feeds</h1>
      <div className="space-y-4">
        {data && data.length > 0 ? (
          data.map((feed: any, index: number) => (
            <div key={index} className="p-4 border rounded-md">
              <h2 className="text-lg font-semibold">{feed.title}</h2>
              <p>ID: {feed.id}</p>
              <p>Status: {feed.status}</p>
              {feed.company && <p>Company: {feed.company}</p>}
            </div>
          ))
        ) : (
          <p>No feeds found.</p>
        )}
      </div>
    </main>
  );
}

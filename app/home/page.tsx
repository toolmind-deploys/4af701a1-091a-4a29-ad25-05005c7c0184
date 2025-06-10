import React from 'react';

export default async function JokesPage() {
  const response = await fetch('http://localhost:3000/api/home', {
    cache: 'no-store',
  });

  const { data } = await response.json();

  // Transform feed data to display comedic or entertaining style jokes
  const jokes = data.map((feed: any) => {
    // Create a playful or joke-like version of the title.
    const jokeTitle = `Here's a joke about '${feed.title}': Did you hear it was pinned? It's ${feed.pinned ? 'definitely pinned!' : 'apparently not pinned.'}`;

    return {
      id: feed.id,
      jokeTitle,
      status: feed.status,
      company: feed.company,
      createdAt: feed.createdAt
    };
  });

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Jokes Page</h1>
      <div className="space-y-4">
        {jokes && jokes.length > 0 ? (
          jokes.map((jokeItem: any, index: number) => (
            <div key={index} className="p-4 border rounded-md">
              <h2 className="text-lg font-semibold">{jokeItem.jokeTitle}</h2>
              <p>ID: {jokeItem.id}</p>
              <p>Status: {jokeItem.status}</p>
              {jokeItem.company && <p>Company: {jokeItem.company}</p>}
              <p>Created At: {new Date(jokeItem.createdAt).toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p>No jokes to crack right now.</p>
        )}
      </div>
    </main>
  );
}

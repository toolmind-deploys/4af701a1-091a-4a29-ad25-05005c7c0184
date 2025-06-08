'use client';

import React, { useState, useEffect } from 'react';

interface Feed {
  id: string;
  title: string;
  company?: string;
  description?: string;
  [key: string]: any;
}

export default function HomePage() {
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFeeds() {
      try {
        const response = await fetch('/api/home');
        if (!response.ok) {
          throw new Error('Failed to fetch feeds.');
        }
        const data = await response.json();
        setFeeds(data.feeds || []);
      } catch (err: any) {
        setErrorMessage(err.message);
      }
    }

    fetchFeeds();
  }, []);

  return (
    <main className="p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Feeds</h1>
        {errorMessage && (
          <p className="text-red-500 mb-2">Error: {errorMessage}</p>
        )}
        {feeds.map((feed) => (
          <div key={feed.id} className="border border-gray-300 rounded-md p-4 mb-4">
            <h2 className="text-xl font-semibold">{feed.title}</h2>
            {feed.company && (
              <p className="text-gray-700 mt-1">Company: {feed.company}</p>
            )}
            {feed.description && (
              <p className="text-gray-600 mt-2">{feed.description}</p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}

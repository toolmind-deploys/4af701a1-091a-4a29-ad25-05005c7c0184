import React from 'react';

export default async function NewsPage() {
  // Fetch feed data from our API route
  const response = await fetch('http://localhost:3000/api/home', {
    cache: 'no-store',
  });

  // "data" will contain the array of feed objects
  const { data } = await response.json();

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Funny Fake News</h1>
      {data && Array.isArray(data) && data.length > 0 ? (
        data.map((feed: any, index: number) => {
          // Combine feed data with comedic flair
          const comedicHeadline = `BREAKING: ${feed.company || 'Unknown Company'} Strikes Again - "${feed.title}"!`;
          return (
            <div key={index} className="border rounded-md p-4">
              <h2 className="text-lg font-semibold mb-2">{comedicHeadline}</h2>
              <p className="text-gray-600">Status: {feed.status}</p>
              <p className="text-sm mt-2">
                We have just received unconfirmed, possibly sensational, news regarding "{feed.title}"! Word on the street is that the job type is "{feed.jobType}" and feed type is "{feed.feedType}". Stay tuned for more comedic developments!
              </p>
            </div>
          );
        })
      ) : (
        <p>No comedic headlines found.</p>
      )}
    </main>
  );
}

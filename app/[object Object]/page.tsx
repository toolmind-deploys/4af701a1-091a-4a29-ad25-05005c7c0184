import React from 'react';

export default function DogPage() {
    return (
        <main className="flex h-screen items-center justify-center bg-gray-100">
            <img
                src="https://place.dog/400/300"
                alt="A cute dog"
                className="rounded shadow"
            />
        </main>
    );
}

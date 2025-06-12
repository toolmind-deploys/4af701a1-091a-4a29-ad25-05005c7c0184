import React from 'react';

export default function CatPage() {
    return (
        <main className="flex h-screen items-center justify-center bg-gray-100">
            <img
                src="https://placekitten.com/500/300"
                alt="A cute cat"
                className="rounded shadow"
            />
        </main>
    );
}

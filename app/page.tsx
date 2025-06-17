import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Dog in the Middle</h1>
        <Image
          src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"
          alt="A Cute Dog"
          width={300}
          height={300}
          className="mx-auto rounded"
        />
      </div>
    </main>
  );
}

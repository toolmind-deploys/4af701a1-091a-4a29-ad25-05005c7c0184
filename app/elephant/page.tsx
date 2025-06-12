import { initFirebaseAdminSDK } from '@/config/firebase-admin-config';

export default async function ElephantPage() {
  // Initialize Firebase Admin SDK if needed
  initFirebaseAdminSDK();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-4xl font-bold mb-4">Elephant Page</h1>
      <p className="text-lg text-gray-600">Welcome to the Elephant page!</p>
    </main>
  );
}

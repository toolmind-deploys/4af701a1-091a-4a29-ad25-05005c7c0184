import { NextResponse } from 'next/server';
import { initFirebaseAdminSDK } from '@/config/firebase-admin-config';
import { getFirestore } from 'firebase-admin/firestore';

export async function GET() {
  initFirebaseAdminSDK();
  const db = getFirestore();
  // Potentially fetch data from Firestore here
  return NextResponse.json({ message: 'Elephant API is alive!' });
}

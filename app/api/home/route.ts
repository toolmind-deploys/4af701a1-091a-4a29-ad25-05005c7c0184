import { NextResponse } from 'next/server';
import { initFirebaseAdminSDK } from '@/config/firebase-admin-config';
import { getFirestore } from 'firebase-admin/firestore';

export async function GET() {
  try {
    initFirebaseAdminSDK();
    const db = getFirestore();
    // Pull feed data from Firestore
    const snapshot = await db.collection('feeds').get();
    const data = snapshot.docs.map((doc) => doc.data());

    // Return feed data as JSON
    return NextResponse.json({ data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

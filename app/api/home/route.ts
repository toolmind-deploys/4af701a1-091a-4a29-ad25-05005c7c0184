import { NextResponse } from 'next/server';
import { initFirebaseAdminSDK } from '@/config/firebase-admin-config';
import { getFirestore } from 'firebase-admin/firestore';

export async function GET() {
  try {
    initFirebaseAdminSDK();
    const db = getFirestore();
    const snapshot = await db.collection('feeds').get();
    const feeds = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    return NextResponse.json({ feeds });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

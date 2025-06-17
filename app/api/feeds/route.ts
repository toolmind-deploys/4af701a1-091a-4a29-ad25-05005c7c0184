import { NextRequest, NextResponse } from 'next/server';
import { firestore } from 'firebase-admin';
import { initFirebaseAdminSDK } from '@/config/firebase-admin-config';

initFirebaseAdminSDK();
const fsdb = firestore();

export async function GET(req: NextRequest) {
  try {
    // Fetch all feeds from Firestore.
    const snapshot = await fsdb.collection('feeds').get();
    const feeds: any[] = [];
    snapshot.forEach(doc => {
      // Use doc.id or the 'id' field from Firestore doc.
      feeds.push({ id: doc.id, ...doc.data() });
    });

    return NextResponse.json({ feeds });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

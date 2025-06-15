import { NextResponse } from 'next/server';
import { getFirestore } from 'firebase-admin/firestore';
import { initFirebaseAdminSDK } from '@/config/firebase-admin-config';
import { getApps } from 'firebase-admin/app';

export async function GET() {
  // Initialize Firebase Admin SDK if not already.
  initFirebaseAdminSDK();

  const db = getFirestore();
  const snapshot = await db.collection('feeds').get();

  // Convert each document into a JavaScript object.
  const feeds: any[] = [];
  snapshot.forEach(doc => {
    // Merge the ID into the document data.
    feeds.push({ id: doc.id, ...doc.data() });
  });

  return NextResponse.json({ feeds });
}

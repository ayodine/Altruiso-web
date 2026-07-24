import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

/*
 * Firebase config — reads from Vite env (VITE_FIREBASE_*). Project-derived
 * values default to `altruiso-web-prod` (the same project that hosts the site).
 *
 * NOTE: Firestore only — no Firebase Storage (which requires the paid Blaze
 * plan). Firestore works on the free Spark plan. The pitch deck is collected as
 * a shareable link, so no file storage is needed.
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'altruiso-web-prod.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'altruiso-web-prod',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const isConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.appId);
if (!isConfigured) {
  console.warn(
    '⚠️ Firebase not configured. Submissions will be emailed only (no Firestore record).\n' +
    'Add VITE_FIREBASE_API_KEY and VITE_FIREBASE_APP_ID to your .env file.'
  );
}

const app = isConfigured ? (getApps().length ? getApp() : initializeApp(firebaseConfig)) : null;
const db = app ? getFirestore(app) : null;

const COLLECTION = 'pitch_submissions';

/**
 * Submit a completed pitch.
 * @param {Object} data answers keyed by field name (includes pitch_deck_url)
 */
export async function submitFormResponse(data) {
  try {
    const record = {
      ...data,
      created_at: db ? serverTimestamp() : new Date().toISOString(),
    };

    // Persist to Firestore (best effort — email is the primary notification).
    if (db) {
      try {
        await addDoc(collection(db, COLLECTION), record);
      } catch (dbErr) {
        console.error('Firestore write failed (continuing to email):', dbErr);
      }
    } else {
      console.warn('Firebase not configured. Logging submission locally:', record);
    }

    // Email the answers (including the deck link) to the Altruiso inbox.
    await notifyByEmail(data);

    return { success: true };
  } catch (err) {
    console.error('Submission error:', err);
    return { success: false, error: err.message };
  }
}

async function notifyByEmail(data) {
  const key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  if (!key) {
    console.warn('VITE_WEB3FORMS_ACCESS_KEY missing — email notification skipped.');
    return;
  }
  try {
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: key,
        subject: `New investment pitch: ${data.company_name || ''} — ${data.first_name || ''} ${data.last_name || ''}`.trim(),
        from_name: 'Altruiso Pitch Form',
        replyto: data.email || undefined,
        ...data,
      }),
    });
  } catch (e) {
    console.error('Email notification error:', e);
  }
}

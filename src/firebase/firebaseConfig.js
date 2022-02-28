import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

let config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  appId: process.env.REACT_APP_APP_ID,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
};

const app = initializeApp(config);
const analytics = getAnalytics(app);

logEvent(analytics, "site_wisited");

export { app };

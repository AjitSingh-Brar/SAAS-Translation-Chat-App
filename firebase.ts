import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyD3EZ-V8oYRrA-H3sFzOE9fb7p559dwXw4",
  authDomain: "saas-translator-app-gt.firebaseapp.com",
  projectId: "saas-translator-app-gt",
  storageBucket: "saas-translator-app-gt.appspot.com",
  messagingSenderId: "1067449458215",
  appId: "1:1067449458215:web:bbee8a867aab74875bf802",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };

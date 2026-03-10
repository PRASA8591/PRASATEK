import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDijkYp6_KD3B3UXfNs59LgTUeaKOFDZ7s",
  authDomain: "prasatek-8a823.firebaseapp.com",
  projectId: "prasatek-8a823",
  storageBucket: "prasatek-8a823.firebasestorage.app",
  messagingSenderId: "1057332753842",
  appId: "1:1057332753842:web:ecb1ec9728e6dc9c59e0ab"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

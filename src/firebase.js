import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Import Firestore correctly

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyS2VIGnleQnHYW7vngpqiLxT5Zn1vAZE",
  authDomain: "cel-sachin.firebaseapp.com",
  projectId: "cel-sachin",
  storageBucket: "cel-sachin.appspot.com",
  messagingSenderId: "1080827846761",
  appId: "1:1080827846761:web:42ef3f83f0606cd83b42f8",
  measurementId: "G-XJLCV0204G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore as a named export
export { db }; // Named export

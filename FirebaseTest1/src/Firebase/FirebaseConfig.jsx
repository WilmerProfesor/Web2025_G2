// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB6SN-Akxm6NBjP9xN9baR2EdwB06Qa7w",
  authDomain: "test-g2-2025.firebaseapp.com",
  projectId: "test-g2-2025",
  storageBucket: "test-g2-2025.firebasestorage.app",
  messagingSenderId: "814394851718",
  appId: "1:814394851718:web:853cc0be9fd70b1b5dac07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
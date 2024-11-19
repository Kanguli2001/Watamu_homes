// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "watamu-homes.firebaseapp.com",
  projectId: "watamu-homes",
  storageBucket: "watamu-homes.firebasestorage.app",
  messagingSenderId: "52987583233",
  appId: "1:52987583233:web:88a9d3663c1015bfa09900"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
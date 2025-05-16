// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-Bd_tRruimwYYE_65GTGAIIBtU1IJgy4",
  authDomain: "contact-app-62500.firebaseapp.com",
  projectId: "contact-app-62500",
  storageBucket: "contact-app-62500.firebasestorage.app",
  messagingSenderId: "621142500194",
  appId: "1:621142500194:web:e4721c2fe074e42798c23b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
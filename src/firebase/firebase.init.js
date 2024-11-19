// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4NkWR0tDRPdtA81FcegTgzDUccYb2WF8",
  authDomain: "lingo-bingo-4fa6f.firebaseapp.com",
  projectId: "lingo-bingo-4fa6f",
  storageBucket: "lingo-bingo-4fa6f.firebasestorage.app",
  messagingSenderId: "433446455554",
  appId: "1:433446455554:web:5029a55d4e7fef0da09a1b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

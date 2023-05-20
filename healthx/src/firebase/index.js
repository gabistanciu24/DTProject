// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj3L6T5gprCBqox8cDgVm9HrofklRPWyA",
  authDomain: "healthx-auth.firebaseapp.com",
  projectId: "healthx-auth",
  storageBucket: "healthx-auth.appspot.com",
  messagingSenderId: "681374558025",
  appId: "1:681374558025:web:dde5eeac61c6bd07639c98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

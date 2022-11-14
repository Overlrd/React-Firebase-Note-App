// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNkh8wJ4tWPlnw1WfsOvtn8mx2FkXlUUg",
  authDomain: "to-do-a92fb.firebaseapp.com",
  projectId: "to-do-a92fb",
  storageBucket: "to-do-a92fb.appspot.com",
  messagingSenderId: "919829683647",
  appId: "1:919829683647:web:d0023dad840831fbf7150a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

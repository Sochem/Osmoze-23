// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-fDbG32pMFit6i2KlLZu3T3z5SpyCRDw",
  authDomain: "osmozewebsite.firebaseapp.com",
  projectId: "osmozewebsite",
  storageBucket: "osmozewebsite.appspot.com",
  messagingSenderId: "441266738373",
  appId: "1:441266738373:web:7f8d1f333e293ebd420cac",
  measurementId: "G-JZCQGQHDV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;
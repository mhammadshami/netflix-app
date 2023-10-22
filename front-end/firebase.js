// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRR0DO1MRg54ex_JQmM5gCF-IWSePZi5A",
  authDomain: "netflix-project-eb571.firebaseapp.com",
  projectId: "netflix-project-eb571",
  storageBucket: "netflix-project-eb571.appspot.com",
  messagingSenderId: "137093462463",
  appId: "1:137093462463:web:755728ce7eb1480df1090a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };

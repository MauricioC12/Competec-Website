import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWaoM3KOQkNQYeuskq1MIiBW9NEzzakqY",
  authDomain: "primal-catfish-349517.firebaseapp.com",
  projectId: "primal-catfish-349517",
  storageBucket: "primal-catfish-349517.appspot.com",
  messagingSenderId: "198507340801",
  appId: "1:198507340801:web:0a858a6b3b1892cc644c00",
  measurementId: "G-TEPWCBTYTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }
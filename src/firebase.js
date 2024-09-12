import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARfVojtuoyqrXzVjKKHSbEB16CH2JkQ6A",
  authDomain: "reego-chairs.firebaseapp.com",
  projectId: "reego-chairs",
  storageBucket: "reego-chairs.appspot.com",
  messagingSenderId: "1083009383516",
  appId: "1:1083009383516:web:fbd173599887247d183a99"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
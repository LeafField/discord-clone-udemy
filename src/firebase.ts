import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDaG-6ub2zdV0iHtnw4a2n2iHrYhM5rnW0",
  authDomain: "discode-clone-udemy.firebaseapp.com",
  projectId: "discode-clone-udemy",
  storageBucket: "discode-clone-udemy.appspot.com",
  messagingSenderId: "8621228393",
  appId: "1:8621228393:web:921f7692e31b505ba77df8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1OFM0iaAoZHYKzL2MytWbqWWqltK8j-E",
  authDomain: "buse-5a9ac.firebaseapp.com",
  projectId: "buse-5a9ac",
  storageBucket: "buse-5a9ac.appspot.com",
  messagingSenderId: "914114137723",
  appId: "1:914114137723:web:f5b0e900eacc0de8a55cde"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};


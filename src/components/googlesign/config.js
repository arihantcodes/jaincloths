import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3Lz4AyQNGfTn-G2rRRPufelACNNqceGA",
  authDomain: "jaincloths.vercel.app",
  projectId: "jaincloths-6c9a5",
  storageBucket: "jaincloths-6c9a5.appspot.com",
  messagingSenderId: "512060512461",
  appId: "1:512060512461:web:cfb04c049f922fe73b7184",
  measurementId: "G-M7RKWDR2ZK",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();


export { auth, provider };
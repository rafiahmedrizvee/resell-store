
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC-XDTm9LlOMBXq2Jp3HjXz2CEdcencVO8",
  authDomain: "resell-store-da5a1.firebaseapp.com",
  projectId: "resell-store-da5a1",
  storageBucket: "resell-store-da5a1.firebasestorage.app",
  messagingSenderId: "1062545926282",
  appId: "1:1062545926282:web:82d0bef74da9c15855a573"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
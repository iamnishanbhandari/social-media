import { initializeApp } from "firebase/app";
// import getAuth from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHQ49Zhn_5sMj4gzikYJzHrdvnY2_q_rA",
  authDomain: "social-media-7abea.firebaseapp.com",
  projectId: "social-media-7abea",
  storageBucket: "social-media-7abea.appspot.com",
  messagingSenderId: "129880246649",
  appId: "1:129880246649:web:d27a440ed36f068aa207a8",
  measurementId: "G-36BBH2E8GC",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

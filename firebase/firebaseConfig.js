// firebase/firebaseConfig.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDDxsv8IuUvIAAr48yUdrtSF8OdzwVwGZU",
  authDomain: "librosapi-835fa.firebaseapp.com",
  projectId: "librosapi-835fa",
  storageBucket: "librosapi-835fa.firebasestorage.app",
  messagingSenderId: "707505904800",
  appId: "1:707505904800:web:0e4da2a5b9a030b64a7dc5",
  measurementId: "G-GFM1FMMVS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { auth };
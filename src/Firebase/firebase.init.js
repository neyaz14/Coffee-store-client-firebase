// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK_hKN14ZVUSw_Fcv6KdgCuvvokJ3wlfg",
  authDomain: "coffee-store-c80ea.firebaseapp.com",
  projectId: "coffee-store-c80ea",
  storageBucket: "coffee-store-c80ea.firebasestorage.app",
  messagingSenderId: "201402786342",
  appId: "1:201402786342:web:cf1e717f55a93201313ce7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
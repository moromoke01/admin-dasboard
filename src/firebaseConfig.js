// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAr2JSQ94LLJYa5eFjX_u3hHvht2TcJrnE",
  authDomain: "admin-dashboard-auth-84b60.firebaseapp.com",
  projectId: "admin-dashboard-auth-84b60",
  storageBucket: "admin-dashboard-auth-84b60.appspot.com",
  messagingSenderId: "804757043560",
  appId: "1:804757043560:web:464693637d747000ab7edd",
  measurementId: "G-GE4X9RS9PD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGnaN6ngSrqGuYl9RHTxjOiNoWZAQiIjU",
  authDomain: "netflixgpt09.firebaseapp.com",
  projectId: "netflixgpt09",
  storageBucket: "netflixgpt09.firebasestorage.app",
  messagingSenderId: "201814435446",
  appId: "1:201814435446:web:adf23e8c097df51a7ba157",
  measurementId: "G-RN8NW8S8S0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
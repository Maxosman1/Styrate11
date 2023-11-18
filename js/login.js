import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";

// Firebase configuration (replace with your config)
const firebaseConfig = {
  apiKey: "AIzaSyBD5NQbPThN7wO0vID2Uvg1fb_JCCS1l04",
  authDomain: "styrate-2ca66.firebaseapp.com",
  projectId: "styrate-2ca66",
  storageBucket: "styrate-2ca66.appspot.com",
  messagingSenderId: "56860576310",
  appId: "1:56860576310:web:0270c6c470c05a16602697",
  measurementId: "G-YH58NS4ZHT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const signUpForm = document.getElementById("signup-form");

  // Handle Login
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const loginEmail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Logged in as:", user.email);
        // Redirect to another page or update the UI
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Login error:", errorCode, errorMessage);
        // Handle Errors here.
      });
  });

  // Handle Sign Up
  signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const signUpEmail = document.getElementById("signup-email").value;
    const signUpPassword = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Account created for:", user.email);
        // Redirect to login page or update UI
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Sign Up error:", errorCode, errorMessage);
        // Handle Errors here.
      });
  });
});

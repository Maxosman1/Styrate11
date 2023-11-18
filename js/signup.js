import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Firebase configuration (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyBD5NQbPThN7wO0vID2Uvg1fb_JCCS1l04",
  authDomain: "styrate-2ca66.firebaseapp.com",
  projectId: "styrate-2ca66",
  storageBucket: "styrate-2ca66.appspot.com",
  messagingSenderId: "56860576310",
  appId: "1:56860576310:web:0270c6c470c05a16602697",
  measurementId: "G-YH58NS4ZHT"
};



document.addEventListener("DOMContentLoaded", () => {
  const signUpForm = document.getElementById("signup-form");

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
        // Redirect or update UI
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Sign Up error:", errorCode, errorMessage);
        // Handle errors here
      });
  });
});

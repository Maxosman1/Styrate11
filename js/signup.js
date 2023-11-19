

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

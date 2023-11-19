document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const signUpForm = document.getElementById("signup-form");

  // Handle Login
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const loginEmail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;

    // Add your custom login logic here
    console.log("Login attempt with:", loginEmail, loginPassword);
    // Example: Redirect to another page or update the UI
  });

  // Handle Sign Up
  signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const signUpEmail = document.getElementById("signup-email").value;
    const signUpPassword = document.getElementById("signup-password").value;

    // Add your custom sign-up logic here
    console.log("Sign Up attempt with:", signUpEmail, signUpPassword);
    // Example: Redirect to login page or update UI
  });
});

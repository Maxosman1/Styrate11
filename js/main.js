document.addEventListener("DOMContentLoaded", () => {
  // Handle the login button click for redirection
  const loginButton = document.getElementById("login-button");
  loginButton.addEventListener("click", () => {
    // Redirect to the login page
    // Replace 'login.html' with the actual path to your login page
    window.location.href = "login.html";
  });

  // Dynamic content update - Example: Update user points
  function updateUserPoints() {
    // Fetch and update user points from a server or local storage
    // Placeholder for demonstration
    const pointsElement = document.getElementById("points");
    pointsElement.textContent = "123"; // Replace with actual points fetched
  }

  // Interactive elements - Example: animate card on hover
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("card-hover");
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("card-hover");
    });
  });

  // Call functions to initialize dynamic content
  updateUserPoints();
});

document.addEventListener("DOMContentLoaded", () => {
  const flipCheckbox = document.getElementById("flip");
  const loginForm = document.querySelector(".login-form form");
  const signupForm = document.querySelector(".signup-form form");
  const customAlert = document.getElementById("custom-alert");
  const customAlertMessage = document.getElementById("custom-alert-message");

  // Function to show the custom alert
  function showCustomAlert(message) {
    customAlertMessage.textContent = message;
    customAlert.classList.remove("hidden");
    customAlert.classList.add("show");

    // Hide the alert after 3 seconds
    setTimeout(() => {
      customAlert.classList.remove("show");
      customAlert.classList.add("hidden");
    }, 3000);
  }

  // Handle form submissions for login
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Simulate successful login
      localStorage.setItem("loggedIn", "true"); // Mark user as logged in
      showCustomAlert("You have successfully logged in!");
      setTimeout(() => {
        window.location.href = "/pages/homepage.html"; // Redirect to community page
      }, 3000);
    });
  }

  // Handle form submissions for signup
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Simulate successful signup
      localStorage.setItem("loggedIn", "true"); // Mark user as logged in
      showCustomAlert("You have successfully signed up!");
      setTimeout(() => {
        window.location.href = "/pages/homepage.html"; // Redirect to community page
      }, 3000);
    });
  }
}); // End of DOMContentLoaded event listener
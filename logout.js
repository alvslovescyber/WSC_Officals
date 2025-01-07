
  // Check if user is logged in on community page
  if (window.location.pathname === "/pages/community.html") {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    if (!isLoggedIn) {
      // Redirect back to the login/signup page if not logged in
      showCustomAlert("Access denied! Please log in first.");
      setTimeout(() => {
        window.location.href = "index.html"; // Redirect to login/signup page
      }, 3000);
    }
  }

  // Logout functionality for all pages
  const logoutButton = document.getElementById("logout");
  if (logoutButton) {
    logoutButton.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("loggedIn"); // Clear login state
      showCustomAlert("You have logged out.");
      setTimeout(() => {
        window.location.href = "index.html"; // Redirect to login/signup page
      }, 3000);
    });
  }

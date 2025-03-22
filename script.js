// auth.js - Handles login process

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user input
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Simulate authentication (for now, just redirect)
    if (email === "user@example.com" && password === "password123") {
        alert("Login successful!");
        window.location.href = "resources.html"; // Redirect to resources page
    } else {
        alert("Invalid email or password. Please try again.");
    }
});

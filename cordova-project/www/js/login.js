function validateInput(username, password) {
    if (!username || !password) {
        alert("Please enter both username and password.");
        return false;
    }
    return true;
}

function login(username, password) {
    if (validateInput(username, password)) {
        // Simulate a login process
        if (username === "admin" && password === "password") {
            // Redirect to dashboard on successful login
            window.location.href = "pages/dashboard.html";
        } else {
            alert("Invalid username or password.");
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("loginButton");
    loginButton.addEventListener("click", function() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        login(username, password);
    });
});
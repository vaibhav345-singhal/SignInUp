// Function to handle the logout process
function logout() {
    // Clear local storage
    localStorage.clear();
    // Redirect to the signup page
    window.location.href = 'index.html';
}

function login() {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        // User is not logged in, redirect to signup page
        window.location.href = 'index.html';
    } else {
        // User is logged in, display profile info
        const username = localStorage.getItem('username');
        const email = localStorage.getItem('email');
        const token = localStorage.getItem('accessToken');
        const password = localStorage.getItem('password');

        document.getElementById('username').innerText = username;
        document.getElementById('email').innerText = email;
        document.getElementById('token').innerText = token;
        document.getElementById('password').innerText = password;

    }
}

// Check if the user is logged in when the profile page loads
login();

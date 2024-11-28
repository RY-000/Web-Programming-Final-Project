document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.querySelector('.login-container');
    const registerContainer = document.querySelector('.register-container');

    // Show login container by default
    loginContainer.style.display = 'block';

    // Event Listener to show registration form
    document.getElementById('showRegister').addEventListener('click', (event) => {
        event.preventDefault();
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'block';
    });

    // Event Listener to show login form
    document.getElementById('showLogin').addEventListener('click', (event) => {
        event.preventDefault();
        registerContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    });

    // Handle login form submission
    document.getElementById('loginForm').addEventListener('submit', (event) => {
        event.preventDefault();
        // Here, you would typically send the login data to the server for authentication

        alert("Login Successful!"); // Placeholder alert for successful login
    });

    // Handle registration form submission
    document.getElementById('registerForm').addEventListener('submit', (event) => {
        event.preventDefault();
        // Here, you would typically send the registration data to the server for processing

        alert("Registration Successful!"); // Placeholder alert for successful registration
    });
});

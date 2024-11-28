document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.querySelector('.login-container');
    const registerContainer = document.querySelector('.register-container');
    const eventsSection = document.querySelector('.events-section');

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
        const email = loginContainer.querySelector('input[type="email"]').value;
        const password = loginContainer.querySelector('input[type="password"]').value;

        // Here, you would typically send the login data to the server for authentication

        // For demonstration, we assume successful login
        alert("Login Successful!"); // Placeholder for successful login action

        // Show the events section and hide login and registration forms
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'none';
        eventsSection.style.display = 'block'; 
    });

    // Handle registration form submission
    document.getElementById('registerForm').addEventListener('submit', (event) => {
        event.preventDefault();
        // For demonstration, we assume registration is successful
        alert("Registration Successful!"); // Placeholder for successful registration action
        
        // Optionally, switch to login form after registration
        registerContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    });
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const activity = document.getElementById('activity').value;

    // Here, you could add code to send this data to a server
    // For this example, we'll simply show a confirmation message
    document.getElementById('confirmation').classList.remove('hidden');
    document.getElementById('signup-form').reset(); // Reset the form
});

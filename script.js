document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const activity = document.getElementById('activity').value;

    document.getElementById('confirmation').classList.remove('hidden');
    document.getElementById('signup-form').reset();
});

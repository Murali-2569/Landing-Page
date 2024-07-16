document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple input validation
    if (!username || !password) {
        document.getElementById('message').innerText = 'Please fill in all fields.';
        return;
    }

    // Password hashing
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, function(err, hash) {
        if (err) {
            document.getElementById('message').innerText = 'Error hashing password.';
            return;
        }

        // Normally, you'd send the hash to the server for verification
        console.log('Username:', username);
        console.log('Password Hash:', hash);

        // For demonstration purposes, just show a success message
        document.getElementById('message').innerText = 'Login successful (check console for hash).';
    });
});

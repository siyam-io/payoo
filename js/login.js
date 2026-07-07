// Login page handler
document.getElementById('btn-login').addEventListener('click', function(event) {
    // Prevent default form submission reload
    event.preventDefault();
    
    const phoneNumber = document.getElementById('login-phone').value;
    const pinNumber = document.getElementById('login-pin').value;
    
    // Check credentials (using standard student test credentials)
    if (phoneNumber === '01711223344' && pinNumber === '1234') {
        // Redirect to homepage dashboard
        window.location.href = './home.html';
    } else {
        alert('Wrong phone number or PIN. Please try again.');
    }
});

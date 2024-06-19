document.getElementById('signInTab').addEventListener('click', function() {
    document.getElementById('signInForm').style.display = 'block';
    document.getElementById('signUpForm').style.display = 'none';
    this.classList.add('active');
    document.getElementById('signUpTab').classList.remove('active');
});

document.getElementById('signUpTab').addEventListener('click', function() {
    document.getElementById('signUpForm').style.display = 'block';
    document.getElementById('signInForm').style.display = 'none';
    this.classList.add('active');
    document.getElementById('signInTab').classList.remove('active');
});

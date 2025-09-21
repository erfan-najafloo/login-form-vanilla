const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');
const loginButton = document.querySelector('.login-button');
const outputMessage = document.querySelector('.output-message');
loginButton.addEventListener(
    

    'click', (event) => {
        event.preventDefault();
        if (emailInput.value === '' && passwordInput.value === '') {
            outputMessage.textContent = 'Email and password are required'
        }
        else if (emailInput.value === '') {
            outputMessage.textContent = 'Please enter your Email'
        } else if (passwordInput.value === '') {
            outputMessage.textContent = 'Please enter your password'
        } else {
            outputMessage.textContent = "Login successful"
        }

    });
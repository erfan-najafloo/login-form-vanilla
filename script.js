const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');
const loginButton = document.querySelector('.login-button');
const errorOutputMessage = document.querySelector('.error-message');
const successOutPutMessage=document.querySelector('.success-message');
loginButton.addEventListener(
    

    'click', (event) => {
        event.preventDefault();
        errorOutputMessage.textContent=''
        successOutPutMessage.textContent=''
        if (emailInput.value === '' && passwordInput.value === '') {
            errorOutputMessage.textContent = 'Email and password are required'
        }
        else if (emailInput.value === '') {
            errorOutputMessage.textContent = 'Please enter your Email'
        } else if (passwordInput.value === '') {
            errorOutputMessage.textContent = 'Please enter your password'
        } else {
            successOutPutMessage.textContent = "Login successful"
        }

    });
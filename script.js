const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');
const loginButton = document.querySelector('.login-button');
const errorOutputMessage = document.querySelector('.error-message');
const successOutPutMessage = document.querySelector('.success-message');
loginButton.addEventListener(


    'click', (event) => {
        const validateEmail = (email) => {
            return String(email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
        };
        function validatePassword(pw) {

    return /[A-Z]/       .test(pw) &&
           /[a-z]/       .test(pw) &&
           /[0-9]/       .test(pw) &&
           /[^A-Za-z0-9]/.test(pw) &&
           pw.length > 4;

}
        event.preventDefault();
        errorOutputMessage.textContent = ''
        successOutPutMessage.textContent = ''
        if (emailInput.value === '' && passwordInput.value === '') {
            errorOutputMessage.textContent = 'Email and password are required'
        }
        else if (emailInput.value === '') {
            errorOutputMessage.textContent = 'Please enter your Email'
        } else if (passwordInput.value === '') {
            errorOutputMessage.textContent = 'Please enter your password'
        }
            else if(!validateEmail(emailInput.value)){
                errorOutputMessage.textContent = "Please enter a valid email address"
            }else if(!validatePassword(passwordInput.value)){
                errorOutputMessage.textContent = "Please enter a valid password"
            }else{
                successOutPutMessage.textContent='Success Login'
            }
        }

  

);
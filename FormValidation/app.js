 const form = document.getElementById("form");
 const username = document.getElementById("username");
 const email = document.getElementById("email");
 const password = document.getElementById("password");
 const confirmPassword = document.getElementById("password2");

 form.addEventListener('submit', function(e) {
    e.preventDefault();

    setInputs();
 });

 function setInputs() {
     // Get values from inputs
     const usernameValue = username.value.trim();
     const emailValue = email.value.trim();
     const passwordValue = password.value.trim();
     const confirmPasswordValue = confirmPassword.value.trim();
    
     // Flags initially set to false
     let usernameFlag = false;
     let emailFlag = false;
     let passwordFlag = false;
     let confirmPasswordFlag = false;

     // Username validation
     if (usernameValue === '') {
         
         displayError(username, 'Username cannot be empty');
     }
     else {
         
         displaySuccess(username);
         usernameFlag = true;
     }

     // Email validation
     if (emailValue === '') {
         displayError(email, 'Email cannot be empty');
     }
     else if (!checkEmail(emailValue)) {
         displayError(email, 'Email is invalid');
     }
     else {
         displaySuccess(email);
         emailFlag = true;
     }

     // Password validation
     if (passwordValue === '') {
        displayError(password, 'Password cannot be empty');
     }
     else if (!checkPassword(passwordValue)) {
         displayError(password, 'Password must be between 7-15 characters including atleast one numeric digit and a special character');
     }
     else {
         displaySuccess(password);
         passwordFlag = true;
     } 

     // Confirm password validation
     if (confirmPasswordValue === '') {
         displayError(confirmPassword, 'Password cannot be empty');
     }
     else if (!checkPassword(confirmPasswordValue)) {
         displayError(confirmPassword, 'Password must be between 7-15 characters including atleast one numeric digit and a special character')
     }
     else if(passwordValue !== confirmPasswordValue) {
         displayError(confirmPassword, "Passwords do not match");
     }
     else {
         displaySuccess(confirmPassword);
         confirmPasswordFlag = true;
     }

     // Alerts a success message and reloads the page if all flags evaluate to true
     if (usernameFlag && emailFlag && passwordFlag && confirmPasswordFlag) {
        alert("Success, Your form has been submitted");
        location.reload();
    }
 }

 // Displays error messages 
 function displayError(input, message) {
     const formControl = input.parentElement; 
     const p = formControl.querySelector("p"); 
     formControl.className = "form-control error";
     p.innerText = message;
 }
 
 // Displays success messages
 function displaySuccess(input) {
     const formControl = input.parentElement;
     formControl.className = "form-control success";
}

 // Checks for valid email
 function checkEmail(email) {
     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
 
 // Checks for valid password
 function checkPassword(password, password2) {
     return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(password, password2);
}

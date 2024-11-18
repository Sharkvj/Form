function nameValid(value) {
    return /^[a-zA-Z\s]+$/.test(value) ;
}

function notEmptyCheck(value) {
    return value !== '';
}

function validateName(input, title) {
    let error = false;
    if (!notEmptyCheck(input.value)) {
        input.nextElementSibling.innerText = 'Please enter your ' + title;
        error = true;
    }
    else if(input.value.length >=20){
        input.nextElementSibling.innerText = title +' Should be no longer than 20 character';
        error = true;
    }
     else if (!nameValid(input.value)) {
        input.nextElementSibling.innerText = 'Please enter valid ' + title;
        error = true;
    } else {
        input.nextElementSibling.innerText = '';
    }
    return error;
}

function emailValid(value) {
    const emailPattern = /^[\w.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(value);
}

function validateEmail(input) {
    let error = false;
    if (!notEmptyCheck(input.value)) {
        input.nextElementSibling.innerText = 'Please enter your email';
        error = true;
    }else if(input.value.length > 40){
        input.nextElementSibling.innerText= ' Email Should be no longer than 40 character'
        error=true;
    } 
    else if (!emailValid(input.value)) {
        input.nextElementSibling.innerText = 'Please enter a valid email';
        error = true;
    } else {
        input.nextElementSibling.innerText = '';
    }
    return error;
}


function phoneValid(value) {
    const phonePattern = /^\d{10}$/; // Adjust as needed
    return phonePattern.test(value);
}

function validatePhone(input) {
    let error = false;
    if (!notEmptyCheck(input.value)) {
        input.nextElementSibling.innerText = 'Please enter your phone number';
        error = true;
    } else if (!phoneValid(input.value)) {
        input.nextElementSibling.innerText = 'Please enter a valid phone number';
        error = true;
    } else {
        input.nextElementSibling.innerText = '';
    }
    return error;
}

function handleKeyPress(event) {
    // Add your custom logic here, e.g., allowing only numbers
    const charCode = event.charCode || event.keyCode;
    if (charCode < 48 || charCode > 57) {
        event.preventDefault(); // Prevent input if it's not a number
    }
}

function validateSelect(select) {
    let error = false;
    if (select.value === '') {
        select.nextElementSibling.innerText = 'Please select your country';
        error = true;
    } else {
        select.nextElementSibling.innerText = '';
    }
    return error;
}

function validateCheckboxGroup() {
    const checkboxes=document.forms['ContactForm']['Interests'];
    const errorMessage = checkboxes[0].closest('.form-input').querySelector('.errormessage');
    const checked = Array.from(checkboxes).some(checkbox => checkbox.checked);
    if (!checked) {
        errorMessage.textContent = 'At least one interest must be selected.';
        return true; // Indicate there is an error
    } else {
        errorMessage.textContent = '';
        return false; // No error
    }
}

function validateRadioGroup() {
    const radioGroup=document.forms['ContactForm']['ContactMethod'];
    const errorMessage = radioGroup[0].closest('.form-input').querySelector('.errormessage');
    const checked = Array.from(radioGroup).some(radio => radio.checked);
    if (!checked) {
        errorMessage.textContent = 'Preferred contact method is required.';
        return true; // Indicate there is an error
    } else {
        errorMessage.textContent = '';
        return false; // No error
    }
}

function validateTextArea(textarea, title) {
    let error = false;
    if (!notEmptyCheck(textarea.value)) {
        textarea.nextElementSibling.innerText = 'Please enter your ' + title;
        error = true;
    } else if (textarea.value.length > 300) {
        textarea.nextElementSibling.innerText = title + ' should not exceed 300 characters';
        error = true;
    } else {
        textarea.nextElementSibling.innerText = '';
    }
    return error;
}
// Password validation function
function passwordValid(password) {
    const minLength = 8; // Minimum length of 8 characters
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);

    // Password must be at least 8 characters and contain both letters and numbers
    return password.length >= minLength && hasLetters && hasNumbers;
}

// Validate Password Field
function validatePassword(input) {
    let error = false;
    if (!input.value) {
        input.nextElementSibling.innerText = 'Please enter a password';
        error = true;
    } else if (!passwordValid(input.value)) {
        input.nextElementSibling.innerText = 'Password must be at least 8 characters long and contain both letters and numbers';
        error = true;
    } else {
        input.nextElementSibling.innerText = '';
    }
    return error;
}

// Validate Confirm Password Field
function validateConfirmPassword(input) {
    let error = false;
    const password = document.getElementById('Password').value;
    if (!input.value) {
        input.nextElementSibling.innerText = 'Please confirm your password';
        error = true;
    } else if (input.value !== password) {
        input.nextElementSibling.innerText = 'Passwords do not match';
        error = true;
    } else {
        input.nextElementSibling.innerText = '';
    }
    return error;
}

// Include the new fields in the form validation function
function validateForm(form) {
    const firstName = form['FirstName'];
    const lastName = form['LastName'];
    const email = form['Email'];
    const phone = form['Phone'];
    const country = form['Country'];
    const password = form['Password'];
    const confirmPassword = form['ConfirmPassword'];
    const comments = form['Comments'];

    // Validate fields
    const errorFirstName = validateName(firstName, 'First Name');
    const errorLastName = validateName(lastName, 'Last Name');
    const errorEmail = validateEmail(email);
    const errorPhone = validatePhone(phone);
    const errorPassword = validatePassword(password);
    const errorConfirmPassword = validateConfirmPassword(confirmPassword);
    const errorCountry = validateSelect(country);
    const errorInterests = validateCheckboxGroup();
    const errorContactMethod = validateRadioGroup();
    const errorComments = validateTextArea(comments, 'Comments');

    if (errorFirstName || errorLastName || errorEmail || errorPhone || errorPassword || errorConfirmPassword || errorCountry || errorInterests || errorContactMethod || errorComments) {
        return false;
    }

    return true;
}


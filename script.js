const form = document.getElementById('form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

// Validate Form
let isValid = false;
let passwordsMatch = false;

const checkPassword = () => {
    // Check if password match
    if(password.value === confirmPassword.value) {
        passwordsMatch = true;
        password.style.borderColor = '';
        message.textContent = 'Great! Password Matches';
        confirmPassword.style.borderColor = '';
        message.style.color = 'black';
        messageContainer.style.borderColor = 'black';
    } else {
        message.textContent = 'Make sure passswords match';
        password.style.borderColor = '#d4050563';
        confirmPassword.style.borderColor = '#d4050563';
        message.style.color = '#ff0000a6';
        messageContainer.style.borderColor = '#ff0000a6';
    }
}

const validateForm = () => {
    // Using Contrainst API
    isValid = form.checkValidity();
    // Style main message for an error
    if(!isValid) {
        message.textContent = 'Please fill out all fields.';
        message.style.color = '#ff0000a6';
        messageContainer.style.borderColor = '#ff0000a6';
    }
    checkPassword();
    if(isValid && passwordsMatch) {
        message.textContent = 'Successfuly Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

// Store From Data 
const storeFormData = () => {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };

    // Do sth with user => store to db ...
    console.log(user);
}

// Process Form Submit Data
const processFormData = (e) => {
    e.preventDefault();
    // Validate Form
    validateForm();
    // Submit Data if Valid
    if(isValid && passwordsMatch) {
        storeFormData();
    }
}

// Event Listener 
form.addEventListener('submit', processFormData);
password.addEventListener('input', checkPassword);
confirmPassword.addEventListener('input', checkPassword);

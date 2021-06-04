const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
let point = 0;
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username)
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email)
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else if (passwordValue.length < 8) {
        setErrorFor(password, 'Password must contain 8 letters');
        password.value = '';
        password2.value = '';
        setTimeout(() => location.reload(),2500)
    } else {
        setSuccessFor(password)
    }

    if(password2Value === '') {
        setErrorFor(password2, 'Password confirm cannot be blank');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Password dose not match');
    }
    else {
        setSuccessFor(password2)
    }

    if (point === 4) {
        alert('Create account success')
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement //.form-control
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.classList.add('error');
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.classList.add('success');
    point++;
}
function isEmail(email) {
    return /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm.test(email)
}
const arrs = [username,email,password,password2];

arrs.forEach(arr => {
    arr.addEventListener('focus', () => {
        const parent = arr.parentElement;
        if(parent.classList.contains('error')) {
            parent.classList.remove('error')
        }
    })
})
// password2.addEventListener('focus', () => {
//     const parent = password2.parentElement;
//     if(parent.classList.contains('error')) {
//         parent.classList.remove('error')
//     }
// })
// username.addEventListener('focus', () => {
//     const parent = username.parentElement;
//     if(parent.classList.contains('error')) {
//         parent.classList.remove('error')
//     }
// })
// email.addEventListener('focus', () => {
//     const parent = email.parentElement;
//     console.log(parent.classList);
//     if(parent.classList.contains('error')) {
//         parent.classList.remove('error')
//     }
// })
// password.addEventListener('focus', () => {
//     const parent = password.parentElement;
//     if(parent.classList.contains('error')) {
//         parent.classList.remove('error')
//     }
// })
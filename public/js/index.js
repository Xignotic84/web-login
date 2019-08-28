


function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function toggleViewPWD() {
    const pwd = document.getElementById('pwd');
    const eye = document.getElementById('eye');
    if (pwd) {
        if (pwd.type === 'password') {
            pwd.type = 'text';
            eye.className = "fas fa-eye-slash";
            eye.style.fontSize = "19px"
        } else {
            eye.className = "fas fa-eye";
            pwd.type = 'password';
            eye.style.fontSize = "20px"
        }
    }
}



function checkLogin() {
    const email = document.form.email;
    const password = document.form.password;
    const msg = document.getElementById('er-msg');
    const emptyPass = password.value === "";
    const emptyEmail = email.value === "";

    let success = false;

    if (emptyPass) {
        password.style.border = '1px solid #ff3333'
    } else {
        password.style.border = ""
    }

    if (emptyEmail) {
        email.style.border = '1px solid #ff3333'
    } else {
        email.style.border = ""
    }

    if (!emptyEmail && !emptyPass) {
        if (!validateEmail(email.value)) {
            msg.style.visibility = 'visible';
            email.style.border = '1px solid #ff3333'
            msg.style.animation = "shake 0.82s cubic-bezier(.36,.07,.19,.97) both";
            msg.innerHTML = "Please enter a valid email address";
            return false
        }
    }

    if (emptyEmail || emptyPass) {
        let erMsg = [];
        if (emptyPass) {
            if (!erMsg[0]) {
                erMsg.push('Please enter your password')
            } else {
                erMsg.push(' and password')
            }
        }
        if (emptyEmail) {
            if (!erMsg[0]) {
                erMsg.push('Please enter your email')
            } else {
                erMsg.push(' and email')
            }
        }
        msg.style.visibility = 'visible';
        msg.style.animation = "shake 0.82s cubic-bezier(.36,.07,.19,.97) both";
        msg.innerHTML = erMsg.join('');
    } else {
        msg.innerHTML = "";
        msg.style.visibility = "hidden";
        success = true;
    }

    if (success) {
        storeData(email, password);
        return false
    }



    return false
}

function storeData(emailElem, passwordElem) {
    const password = passwordElem.value;
    const email = emailElem.value;
    console.log(email)

}
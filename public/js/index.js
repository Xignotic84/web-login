
function toggleViewPWD() {
    const pwd = document.getElementById('pwd');
    const eye = document.getElementById('eye');
    if (pwd) {
        if (pwd.type === 'password') {
            pwd.type = 'text';
            eye.className = "fas fa-eye-slash";
        } else {
            eye.className = "fas fa-eye";
            pwd.type = 'password'
        }
    }
}



function checkLogin() {
    const email = document.form.email;
    const password = document.form.password;
    const msg = document.getElementById('er-msg');
    const emptyPass = password.value === "";
    const emptyEmail = email.value === "";

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
        msg.innerHTML = erMsg.join('');
    } else {
        msg.innerHTML = "";
        msg.style.border = "";
        msg.style.visibility = "hidden";
    }

    return false
}
// Helpers
function getEle(id) {
    return document.getElementById(id);
}
// HelpersCheck
function HelpersCheck(selectorValue, selectedError) {
    if (checkInvalid(selectorValue, selectedError))
        return true;
    else return false;
}


// Check strings empty in Form
function checkInvalid(idValue, idError) {
    let dataInput = getEle(idValue);
    if (dataInput.value.trim() === '') {
        getEle(idError).innerHTML = dataInput.name + " can't empty!"
        return false;
    } else {
        getEle(idError).innerHTML = "";
        return true;
    }
}

// Check strings of fistName and lastName
function checkString(idValue, idError) {
    let dataInput = getEle(idValue);
    let regexString = /^[a-zA-Z]+$/;
    if (regexString.test(dataInput.value)) {
        getEle(idError).innerHTML = "";
        getEle(idError).style.display = "none";
        return true;
    } else {
        getEle(idError).innerHTML = dataInput.name + " is not a number!";
        getEle(idError).style.display = "block";
        return false;
    }
}

// Check all must be number
function checkAllNumber(idValue, idError) {
    let dataInput = getEle(idValue);
    let regexNumber = /^[0-9]+$/;
    if (regexNumber.test(dataInput.value)) {
        getEle(idError).innerHTML = "";
        getEle(idError).style.display = "none";
        return true;
    } else {
        getEle(idError).innerHTML = dataInput.name + " is not a number!";
        getEle(idError).style.display = "block";
        return false;
    }
}

// Check email
function checkEmail(idValue, idError) {
    let dataInput = getEle(idValue);
    let regexNumber = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regexNumber.test(dataInput.value)) {
        getEle(idError).innerHTML = "";
        getEle(idError).style.display = "none";
        return true;
    } else {
        getEle(idError).innerHTML = dataInput.name + " invalid!";
        getEle(idError).style.display = "block";
        return false;
    }
}

// Check length of email
function checkLengthEmail(idValue, idError) {
    let dataInput = getEle(idValue);
    let min = dataInput.getAttribute('minlength');
    let max = dataInput.getAttribute('maxlength');
    if (dataInput.value.length >= min && dataInput.value.length <= max) {
        getEle(idError).innerHTML = "";
        getEle(idError).style.display = "none";
        return true;
    } else {
        getEle(idError).innerHTML = `Password's length must from ${min} to ${max}`;
        getEle(idError).style.display = "block";
        return false;
    }
}

// Form of submission
function checkValidation() {
    // Check firstName
    let result = false;
    result = checkInvalid('firstName', 'error_firstName') & checkInvalid('lastName', 'error_lastName') & checkInvalid('password', 'error_password') & checkInvalid('confirmPassword', 'error_confirmPassword') & checkInvalid('phone', 'error_phone') & checkInvalid('email', 'error_email');

    // Check only strings
    result &= checkString('firstName', 'error_firstName_all_leter') & checkString('lastName', 'error_lastName_all_leter');

    // Check only numbers
    result &= checkAllNumber('phone', 'error_phone');

    // Check email address
    result &= checkEmail('email', 'error_email');
    result &= checkLengthEmail('password', 'error_password_min_max_length');

    // Last Condition 
    if (!result)
        return false;
    return result;
}

getEle("firstName").onblur = checkValidation;
getEle("lastName").onblur = checkValidation;
getEle("password").onblur = checkValidation;
getEle("phone").onblur = checkValidation;
getEle("email").onblur = checkValidation;
getEle('btnDangKy').onclick = checkValidation;
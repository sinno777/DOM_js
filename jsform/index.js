function getEle(id) {
    return document.getElementById(id);
}

function checkValidation() {
    let firstName = getEle("firstName");
    firstName = firstName.value;
    checkInvalid(firstName, 'error_firstName', "firstName");
}

function checkInvalid(value, selectedError, nameFix) {
    if (value.trim() === "") {
        getEle(selectedError).innerHTML = nameFix + " can't empty!"
        return false;
    } else {
        getEle(selectedError).innerHTML = "";
        return true;
    }
}

getEle("firstName").onblur = checkValidation();
getEle('btnDangKy').onclick = checkValidation();
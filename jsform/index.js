function getEle(id) {
    document.getElementById(id);
}

function checkValidation() {
    var firstName = getEle("firstName").value;
    if (firstName === "") {
        getEle("error_firstName").innerHTML = "Non validated first name";
    }
}

getEle("firstName").onblur = checkValidation();
getEle('btnDangKy').onclick = checkValidation();
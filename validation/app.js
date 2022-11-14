var pattern = /sinoo/ig;
var inputButton = document.querySelector('#input--button')

inputButton.onclick = function () {
    var inforUser = document.querySelector("#input--user").value;
    var notice = document.querySelector('#notice');

    if (pattern.test(inforUser)) {
        inputButton.className = "btn btn-success";
        notice.innerHTML = "You success accessing";
        notice.className = "alert alert-success ";
    } else {
        inputButton.className = "btn btn-danger";
        notice.innerHTML = "You fail!!";
        notice.className = "alert alert-danger";
    }
}
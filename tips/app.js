function getEle(id) {
    return document.getElementById(id);
}

function calculateTips() {
    var sumBil = getEle("billamt").value;
    var percentage = getEle("serviceQual").value;
    var devidePeo = getEle("peopleamt").value;

    //validation
    if (sumBil === "" || percentage == 0) {
        alert("Please! Fill value");
        return;
    }

    //check People
    if (devidePeo <= 1 || devidePeo === "") {
        devidePeo = 1;
        getEle("each").style.display = "none";
    } else {
        getEle("each").style.display = "block";
    }

    //calculate
    var totalTip = (sumBil * percentage) / devidePeo;
    totalTip = Math.round(totalTip * 100) / 100;
    totalTip = totalTip.toFixed(2);
    getEle("tip").innerHTML = totalTip;
    getEle("totalTip").style.display = "block";

}
getEle("totalTip").style.display = "none";

getEle("calculate").onclick = function () {
    calculateTips();
}

let student = new Student();

// Fun Helpers
function getEle(id) {
    return document.getElementById(id);
}

let handle_BtnComfirm = () => {
    // Get the user's data
    student.id = getEle("idStu").value;
    student.name = getEle("nameStu").value;
    student.typeStu = getEle("typeStu").value;
    student.math = getEle("math").value;
    student.physical = getEle("physical").value;
    student.chemistry = getEle("chemistry").value;
    student.trainingMark = getEle("trainingMark").value;

    // Show out screen
    getEle("showId").innerHTML = student.id.toUpperCase();
    getEle("showName").innerHTML = student.name.toUpperCase();
    getEle("showType").innerHTML = student.typeStu;
    getEle("showAverage").innerHTML = student.average().toFixed(1);
    getEle("showLevel").innerHTML = student.arrange_levels();
};

getEle('btnComfirm').onclick = handle_BtnComfirm;
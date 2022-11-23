function getEle(id) {
    return document.getElementById(id);
}

let handle_BtnComfirm = () => {
    // Get the user's data
    let idStu = getEle("idStu").value;
    let nameStu = getEle("nameStu").value;
    let typeStu = getEle("typeStu").value;
    let math = getEle("math").value;
    let physical = getEle("physical").value;
    let chemistry = getEle("chemistry").value;
    let trainingMark = getEle("trainingMark").value;
    // Calculate the average
    let average = handle_average(math, physical, chemistry);
    // arrange_levels
    let levels = arrange_levels(average, trainingMark);
    // Print results in screen
    getEle("showId").innerHTML = idStu;
    getEle("showName").innerHTML = nameStu;
    getEle("showType").innerHTML = typeStu;
    getEle("showAverage").innerHTML = average;
    getEle("showLevel").innerHTML = levels;
}

let handle_average = (math, physical, chemistry) => {
    let average = (Number(math) + Number(physical) + Number(chemistry)) / 3;
    average = average.toFixed(1);
    return average;
}

let arrange_levels = (average, trainingMark) => {
    if (trainingMark < 5) {
        return "Fail!!!";
    } else {
        if (Number(average) > 0 && Number(average) >= 8 && Number(average) <= 10) {
            return "Excellent!";
        } else if (Number(average) >= 7) {
            return "Good!";
        } else if (Number(average) >= 5) {
            return "Medium!";
        } else if (Number(average) < 5) {
            return "Fail!";
        } else return "None! Validation";
    }
}

getEle("btnComfirm").onclick = handle_BtnComfirm;
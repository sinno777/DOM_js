// Helpers
function getData(id) {
    return document.getElementById(id);
}

// handle_BtnComfirm
getData("btn_search").onclick = () => {
    const addRess = getData("txtAddRess").value;

    // Use superagent to call api
    superagent.get(`
    https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDBunJ4GXNEC3KJlpoGJO-iB--CjPv4o-s&address=${addRess}
    `).end((err, res) => { // Just return when google active
        // const lat = res.body.results[0].geometry.lat();
        // const lng = res.body.results[0].geometry.lng();
        // const { lat, lng } = res.body.results[0].geometry.location;
        // console.log(lat , lng);
        console.log(res);
    });
}
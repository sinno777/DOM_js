/**
 * B1: Hiển thị Danh sách kính
 * _Glasses
 * _GlassesList
 * B2: Xây dựng chức năng thử kính
 * B3: Xây dựng chức năng so sánh
 */

let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

// Import Class
import { Glasses } from "./glasses.js";
import { GlassesList } from "./glassesList.js";

let glassesList = new GlassesList();

// Helpers function
const getData = (_id) => {
    return document.getElementById(_id);
}

// Handler main
const showGlases = () => {
    let containGlList = getData('vglassesList');

    // Loop oj to add item
    dataGlasses.map((item, index) => {
        let gl = new Glasses(item.id, item.src, item.virtualImg, item.brand, item.name, item.color, item.price, item.description);
        glassesList.addGlList(gl);
    });
    containGlList.innerHTML = glassesList.renderGl();
}

showGlases();

// Show glasses in the face
const tryOnGlasses = (event) => {
    let gId = event.target.getAttribute("data-id");
    let oj = {};
    for (const value of glassesList.glList) {
        if (value.id == gId) {
            oj = value;
        }
    }
    // console.log(oj);
    showInfor(oj);
}

// Transform fucn
window.tryOnGlasses = tryOnGlasses;

// Show infor 
const showInfor = (oj) => {
    let divAvata = getData("avatar");
    let divInfor = getData("glassesInfo");

    divAvata.innerHTML = `
    <img id = "glasses" src="${oj.virtualImg}" >
    `;

    let status = "";
    if (oj.status) status = "Stocking";
    else status = "Sold Out";

    divInfor.innerHTML = `
    <h5>${oj.name} - ${oj.brand} - ${oj.color}</h5>
    <p class = "card-text">
        <span class = "btn btn-danger btn-sm mr-2 ">$${oj.price}</span>
        <span class = "text-success">$${status}</span>
    </p>  
    <p class = "card-text">
        ${oj.desc}
    </p>  
    `;

    divInfor.style.display = "block";
}

// Remove and add
const removeGl = (trueOrFalse) => {
    let glasses = getData("glasses");

    if(trueOrFalse && glasses != null) {
        glasses.style.opacity = 0.8;
    } else if(!trueOrFalse && glasses != null) {
        glasses.style.opacity = 0;
    } else return;
}

window.removeGlasses = removeGl;
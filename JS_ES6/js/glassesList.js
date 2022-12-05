export class GlassesList {
    constructor() {
        this.glList = [];
    }

    // Method 
    addGlList(item) {
        this.glList.push(item);
    }

    // render glassess
    renderGl() {
        let content = '';
        content = this.glList.reduce((glContent, item) => {
            glContent += `
            <div class="col-4" >
            <img class = "img-fluid vglasses__items" onclick = "tryOnGlasses(event)" data-id = "${item.id}" src="${item.src}" alt="Glasses" >
            </div>
            `;
            return glContent;
        }, ''); // return value
        return content;
    }
}
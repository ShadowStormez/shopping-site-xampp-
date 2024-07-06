class ProductBase {
    constructor(parent) {
        this.parent = parent;
        this.parent.addEventListener("click", this);
    }

    createdCard(data, qty) {
        const cardEle = document.createElement("div");
        const imgEle = this.productImg(data);
        const infoEle = this.productInfo(data);
        cardEle.innerHTML = imgEle;
        cardEle.innerHTML += infoEle;
        if (qty !== undefined) {
            const controlEle = this.productControl(data, qty);
            cardEle.innerHTML += controlEle;
        }
        this.parent.appendChild(cardEle);
    }

    productImg(data) {
        const { image, alt } = data;
        return `<img alt=${alt} src=${image}>`;
    }

    productInfo(data) {
        const { name, price } = data;
        const infoClass = this instanceof Cart ? "cart-info" : "product-info";
        return `
            <div id="${infoClass}">
                <h3>${name}</h3>
                <p>${price}</p>
            </div>
        `;
    }

    handleEvent(event) {
        const element = event.target;
        if (element.tagName === "BUTTON") {
            this.buttonAction(element);
        }
    }
}

class Cart extends ProductBase {
    constructor(parent, price) {
        super(parent);
        this.price = price;
        this.products = [];
    }

    showProducts() {
        this.toShow = [...new Set(this.products)];
        this.parent.innerHTML = "";
        this.toShow.forEach(product => {
            const qty = this.products.filter(p => p.id === product.id).length;
            this.createdCard(product, qty);
        });
        this.calculatedPrice();
    }

    productControl(data, qty) {
        const { id } = data;
        return `
            <div id="cart-control">
                <div>
                    <button data-id=${id}>-</button>
                    <span>${qty}</span>
                    <button data-id=${id}>+</button>
                </div>
                <button data-id=${id}>Remove</button>
            </div>
        `;
    }

    buttonAction(element) {
        const id = element.dataset.id;
        const type = element.innerText;
        if (type === "+") this.increase(id);
        else if (type === "-") this.decrease(id);
        else if (type === "Remove") this.remove(id);
    }

    increase(id) {
        const product = this.products.find(p => p.id === +id);
        this.products.push(product);
        this.showProducts();
    }

    decrease(id) {
        const index = this.products.findIndex(p => p.id === +id);
        this.products.splice(index, 1);
        this.showProducts();
    }

    remove(id) {
        this.products = this.products.filter(p => p.id !== +id);
        this.showProducts();
    }

    calculatedPrice() {
        const total = this.products.reduce((acc, cur) => acc += cur.price, 0);
        this.price.innerText = "$ " + total;
    }
}

export default Cart;

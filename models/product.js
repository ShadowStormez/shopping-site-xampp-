class products extends ProductBase {
    constructor(parent, products, cart) {
        super(parent);
        this.products = products;
        this.cart = cart;
    }

    showProducts() {
        this.products.forEach(product => this.createdCard(product));
    }

    buttonAction(element) {
        this.addToCart(element.dataset.id);
    }

    addToCart(id) {
        const product = this.products.find(i => i.id === +id);
        this.cart.products.push(product);
        this.cart.showProducts();
    }
}

export default products;

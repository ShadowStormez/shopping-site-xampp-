import Cart from "./models/cart.js";
import products from "./models/product.js";
import { fechData } from "./utils/httpReq.js";



const productsNode=document.getElementById("products");
const cartListNode=document.getElementById("cart-list");
const totalPriceNode=document.getElementById("total-price").querySelector("span");



async function render(){
    //console.log("load");
    const productsData=await fechData();
    //console.log(productsData);
    const cartInstance=new Cart(cartListNode,totalPriceNode);
    const productsInstance=new products(productsNode,productsData,cartInstance);
    //console.log(cartInstance)
    //console.log(productsInstance)
    productsInstance.showProducts();
}




document.addEventListener("DOMContentLoaded",render);
//load
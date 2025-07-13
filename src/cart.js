"use strict"

let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");
let shopItemsData = JSON.parse(localStorage.getItem("shop-stock")) || defaultShopItemsData;
let basket = JSON.parse(localStorage.getItem("shop-products")) || [];

let cartAmount = () => {
    let cartAmount = document.querySelector(".cartAmount");
    let totalCount = basket.reduce((acc, item) => acc + item.count, 0);

    if(totalCount <= 30) {
        cartAmount.innerHTML = totalCount;
    } else {
        cartAmount.innerHTML = "30+";
    }
}

cartAmount();

let generateCartItems = () => {
    if (basket.length != 0) { 
        return shoppingCart.innerHTML = basket.map((basketItem) => {
            let {id, count} = basketItem;
            let search = defaultShopItemsData.find((product => product.id === id)) || [];
            let {name, price, desc, img} = search;
            return `
            <div class="cart-item">
                <img width="100" height ="100" src="${img}" alt="">
                <div class="details">
                    <div class="title-price-x">
                        <h4 class="title-price">
                            <p>${name}</p>
                            <p class="cart-item-price">$ ${price}</p>
                        </h4>
                        <i onclick="removeItem('${id}');" class="bi bi-x-lg"></i>
                    </div>
                    <div class="buttons">
                        <i onclick="decrementCount('${id}')" class="bi bi-dash-lg"></i>
                        <div id="${id}" class="quantity">${count}</div>
                        <i onclick="incrementCount('${id}')" class="bi bi-plus-lg"></i>
                    </div>
                        <h3>$ ${count * price}</h3>
                </div>
            </div>
            `
        }).join("");
    } else {
        shoppingCart.innerHTML = ``
        label.innerHTML = `
        <h2>Cart is Empty</h2>
        <a href="index.html">
            <button class="HomeBtn">Go back to Shopping</button>
        </a>
        `
    }
}

generateCartItems();

let incrementCount = (id) => {
    let product = shopItemsData.find(prod => prod.id === id);
    let basketItem = basket.find(item => item.id === id);

    if(product.stock <= 0) {
        return alert("No Stock!")
    }

    if(!basketItem) {
        basket.push({
            id: id,
            count : 1,
            stock : product.stock - 1
        })
        product.stock -= 1;
    } else {
        basketItem.count += 1;
        basketItem.stock -= 1;
        product.stock -=1;
    };

    localStorage.setItem("shop-products", JSON.stringify(basket));
    localStorage.setItem("shop-stock", JSON.stringify(shopItemsData));
    update(id);
    generateCartItems();
    cartAmount();
    totaAmount();
};

let decrementCount = (id) => {
    let product = shopItemsData.find(prod => prod.id === id);
    let basketItem = basket.find(item => item.id === id);
    
    if(!basketItem) {
        return;
    } else if(basketItem.count === 0){
        return;
    } else {
        basketItem.count -= 1;
        basketItem.stock += 1;
        product.stock += 1;
    }

    basket = basket.filter((item) => item.count !== 0);
    localStorage.setItem("shop-products", JSON.stringify(basket));
    localStorage.setItem("shop-stock", JSON.stringify(shopItemsData));
    update(id);
    generateCartItems();
    cartAmount();
    totaAmount();
};

let update = (id) => {
    let search = basket.find(basketItem => basketItem.id === id);
    
    if(!search) return;
    document.getElementById(id).innerHTML = search.count;
    cartAmount();
};

let removeItem = (id) => {
    basket = basket.filter(item => item.id !== id);
    shopItemsData = defaultShopItemsData;
    localStorage.setItem("shop-products", JSON.stringify(basket));
    localStorage.setItem("shop-stock", JSON.stringify(shopItemsData));
    generateCartItems();
    cartAmount();
    totaAmount();
};

let clearCart = () => {
    basket = [];
    shopItemsData = defaultShopItemsData;
    localStorage.setItem("shop-products", JSON.stringify(basket));
    localStorage.setItem("shop-stock", JSON.stringify(shopItemsData));
    generateCartItems();
    cartAmount();

}

let totaAmount = () => {
    if (!!basket.length) {
        let amount = basket
            .map((basketItem) => {
                let {id, count} = basketItem;
                let search = shopItemsData.find((product) => product.id == id) || [];
                let {price} = search;
                return count * price;
            })
            .reduce((acc, item) => acc + item, 0);
        label.innerHTML = `
        <h2>Total Bill : $ ${amount}</h2>
        <button class="checkout">Checkout</button>
        <button onclick="clearCart()"class="removeAll">Clear Cart</button>
        `
    } else {
        return;
    }
}

totaAmount();

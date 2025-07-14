"use strict"

let shop = document.getElementById("shop");
let shopItemsData = JSON.parse(localStorage.getItem("shop-stock")) || defaultShopItemsData;
let basket = JSON.parse(localStorage.getItem("shop-products")) || [];

let generateShop = () => {
    
    shop.innerHTML = shopItemsData.map((item) => {
        let { id, name, price, desc, img, stock } = item;
        let search = basket.find((basketItem) => basketItem.id === id) || { count: 0 };

        return `
            <div id="product-id-${id}" class="item">
                <img width="100%" height="340" src="${img}">
                <div class="details">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <div class="price-quantity">
                        <h2>$${price}</h2>
                        <div class="buttons">
                            <i onclick="decrementCount('${id}'), generateShop()" class="bi bi-dash-lg"></i>
                            <div id="${id}" class="quantity">
                                ${search.count} 
                            </div>
                            <i onclick="incrementCount('${id}'), generateShop()" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                    <div class="stock">🏷️ ${stock? stock : "Sold Out"}</div>
                </div>
            </div>
        `;
    }).join('');
};

generateShop();

let incrementCount = (id) => {
    let product = shopItemsData.find(prod => prod.id === id);
    let basketItem = basket.find(item => item.id === id);

    if(product.stock <= 0) {
        return 
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

    update(id);
    localStorage.setItem("shop-products", JSON.stringify(basket));
    localStorage.setItem("shop-stock", JSON.stringify(shopItemsData));
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

    update(id);

    basket = basket.filter((item) => item.count !== 0);
    localStorage.setItem("shop-products", JSON.stringify(basket));
    localStorage.setItem("shop-stock", JSON.stringify(shopItemsData));

};

let update = (id) => {
    let search = basket.find(basketItem => basketItem.id === id);
    
    if(!search) return;
    document.getElementById(id).innerHTML = search.count;
    carAmount();
};

let carAmount = () => {
    let cartAmount = document.querySelector(".cartAmount");
    let totalCount = basket.reduce((acc, item) => acc + item.count, 0);

    if(totalCount <= 30) {
        cartAmount.innerHTML = totalCount;
    } else {
        cartAmount.innerHTML = "30+";
    }
}

carAmount();

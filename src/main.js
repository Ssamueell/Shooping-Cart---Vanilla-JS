"use strict"

let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("shop-products")) || [];

let generateShop = () => {
    
    return (shop.innerHTML = shopItemsData.map((item) => {
        let {id, name, price, desc, img} = item;
        let search = basket.find((basketItem) => basketItem.id === id) || [];
        return `    
        <div id="product-id-${id}" class="item">
            <img width="100%" height="220" src="${img}">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>$${price}</h2>
                    <div class="buttons">
                        <i onclick="decrementCount('${id}')" class="bi bi-dash-lg"></i>
                        <div id="${id}" class="quantity">${search.count ?? 0}</div>
                        <i onclick="incrementCount('${id}')" class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>
    `
    }).join('')); 
}

generateShop();

let incrementCount = (id) => {
    // let selectedItem = document.getElementById(id);
    let search = basket.find(basketItem => basketItem.id === id);
    if(!search) {
        basket.push({
            id: id,
            count : 1
        })
    } else {
        search.count += 1;
    }
    update(id);
    localStorage.setItem("shop-products", JSON.stringify(basket));
};

let decrementCount = (id) => {
    
    let search = basket.find(basketItem => basketItem.id === id);
    if(!search) {
        return;
    } else if(search.count === 0){
        return;
    } else {
        search.count -= 1;
    }

    update(id);
    basket = basket.filter((item) => item.count !== 0);
    localStorage.setItem("shop-products", JSON.stringify(basket));
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


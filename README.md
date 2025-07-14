# 🛒 Shopping Cart - Vanilla JavaScript (with Stock Limit Feature)
An interactive, lightweight, and functional shopping cart built entirely with Vanilla JavaScript, HTML, and CSS. This project includes data persistence via localStorage and real-time stock limit control.

>- ✅ No frameworks or external libraries
>- 🎯 DOM manipulation, events, logic, and local storage
>- 📦 Stock control support: users cannot exceed the available quantity

## 🚀 Features
Dynamically generated product listing

Add, remove, and update item quantity in the cart

Real-time updates for total items and prices

Persistent cart using localStorage

##🔥 Stock control: users can't exceed available units

Interface shows remaining stock with dynamic feedback

## 🧠 Technologies Used
HTML5 – page structure

CSS3 – styling and layout

JavaScript (ES6) – logic and interactivity

LocalStorage API – client-side data persistence

## 📁 Project Structure
```
Shooping-Cart---Vanilla-JS/
│
├── index.html             # Main page with product listings
├── cart.html              # Cart page
├── src/
│   ├── script.js          # Product display logic
│   ├── cart.js            # Cart logic
│   ├── style.css          # General styling
│   └── data.js            # Product data
├── imgs/                  # Product images
└── README.md              # This file
```
## ➕ Add a New Product
Open data.js and add a new product object like this:
{
  id: "product-id",
  name: "Product Name",
  price: 99,
  desc: "Short description",
  img: "imgs/your-image.jpg",
  stock: 10
}
Place the corresponding image in the /imgs folder.

## 🔄 Reset the Cart
To clear the cart, open the browser console and run:

localStorage.removeItem("shop-products");

# 👤 Author
## Samuel Werlang
## GitHub: @Ssamueell



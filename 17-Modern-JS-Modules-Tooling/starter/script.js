// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price);
// console.log(totalQuantity);

console.log('Importing module');

import * as ShoppingCart from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { cart } from './shoppingCart.js';
// add('pizza', 5);
// add('bread', 5);
// add('apples', 5);

// console.log(cart);
// // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// // const data = await res.json();
// // console.log(data);
// // console.log('Something');

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// // console.log(lastPost);

// lastPost.then(last => console.log(last));

// const lastPost2 = getLastPost();
// console.log(lastPost2);

const ShoppingCart2 = (function () {
  const cart = [];
  const shoppingCost = 10;
  const totalPrice = 236;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shoppingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 4);
console.log(ShoppingCart2);

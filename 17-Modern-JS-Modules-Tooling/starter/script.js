// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price);
// console.log(totalQuantity);

console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

import add, { cart } from './shoppingCart.js';
add('pizza', 5);
add('bread', 5);
add('apples', 5);

console.log(cart);

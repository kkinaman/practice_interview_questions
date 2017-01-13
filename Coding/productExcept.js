/*
Given an array, output an array where each index is the product of all elements of the initial array, 
except the element in that position

Example:
  input:   [1, 7, 3, 4]
  output:  [84, 12, 28, 21]
*/

function productExcept(initArray) {
  let products = [];
  let productSoFar = 1;
  initArray.forEach((element, i) => {
    products.push(productSoFar * initArray.slice(i + 1).reduce((acc, cur) => acc * cur, 1));
    productSoFar *= element;
  });
  return products;
}

var initArray = [1, 7, 3, 4];
// var initArray = [1, 0, 2, 5];
console.log(productExcept(initArray));
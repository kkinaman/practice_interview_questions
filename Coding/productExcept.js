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
  //multiply elements before index
  initArray.forEach((element, i) => {
    products.push(productSoFar);
    productSoFar *= element;
  });
  //multiply elements after index
  productSoFar = 1;
  for (let i = initArray.length - 1; i >= 0; i--) {
    products[i] = products[i] * productSoFar;
    productSoFar *= initArray[i];
  }
  return products;
}

// var initArray = [1, 7, 3, 4];
var initArray = [1, 0, 2, 5];
console.log(productExcept(initArray));
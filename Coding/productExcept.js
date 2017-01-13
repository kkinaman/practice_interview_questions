/*
Given an array, output an array where each index is the product of all elements of the initial array, 
except the element in that position

Example:
  input:   [1, 7, 3, 4]
  output:  [84, 12, 28, 21]
*/

function productExcept(initArray) {
  return initArray.map((element, i) => {
    return initArray.reduce((acc, cur) => cur === element ? acc : acc * cur, 1);
  });
}

let input = [1, 7, 3, 4];
console.log(productExcept(input));
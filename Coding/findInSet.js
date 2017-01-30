/*
Given an array of integers sorted in ascending order, how quickly can we determine if a given integer is in the set?
*/

function hasElement(arr, target) {
  if (arr.length <= 1) {
    return arr[0] === target || false;
  }
  let midpoint = Math.floor(arr.length / 2);
  if (target === arr[midpoint]) {
    return true;
  } else if (target < arr[midpoint]) {
    return hasElement(arr.slice(0, midpoint), target);
  } else if (target > arr[midpoint]) {
    return hasElement(arr.slice(midpoint + 1), target);
  }
}

var arr = [1, 2, 3, 4, 5];
console.log(hasElement(arr, 2));
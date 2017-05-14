/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

// Solved in O(n) time with O(1) memory
var sumArray = function(array) {
  var currentSum = 0;
  var largestSoFar = -Infinity;
  for (var i = 0; i < array.length; i++) {
    var curVal = array[i];
    if (curVal > currentSum + curVal) {
      currentSum = curVal;
    } else {
      currentSum += curVal;
    }
    if (currentSum > largestSoFar) {
      largestSoFar = currentSum;
    }
  }
  return largestSoFar;
};
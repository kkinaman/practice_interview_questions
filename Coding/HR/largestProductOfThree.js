/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

// POSITIVE NUMBERS
var largestProductOfThree = function(array) {
  var sorted = array.sort((x, y) => y - x);
  return sorted.slice(0, 3).reduce((acc, cur) => acc * cur);
};

//INCLUDING NEGATIVE NUMBERS
var largestProductOfThree = function(array) {
  var sorted = array.sort((x, y) => Math.abs(y) - Math.abs(x));
  var threeSlice = sorted.slice(0, 3);
  var numNegatives = threeSlice.reduce((acc, cur) => acc += (cur < 0) ? 1 : 0, 0);
  if (numNegatives % 2 === 0) {
    return threeSlice.reduce((acc, cur) => acc * cur);
  } else if (numNegatives === 1) {
    //NOTE: What if it's larger to include the negative and look for another...
    var selected = threeSlice.filter(num => num > 0);
  } else if (numNegatives === 3) {
    var selected = threeSlice.slice(0, 2);
  }
  var index = 3;
  while (index < array.length && array[index] < 0) {
    index++;
  }
  if (index === array.length) { //Also takes care of arrays of length 3 with an odd # of negatives
    return threeSlice.reduce((acc, cur) => acc * cur);
  } else {
    selected.concat(array[index]);
    return selected.reduce((acc, cur) => acc * cur);
  }
};
/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 */

var binarySearch = function (array, target, startIndex) {
  if (!array.length || (array.length === 1 && target !== array[0])) {
    return null;
  }
  startIndex = startIndex || 0;
  var midpoint = Math.floor(array.length / 2);
  if (target > array[midpoint]) {
    return binarySearch(array.slice(midpoint + 1), target, midpoint + 1);
  } else if (target < array[midpoint]) {
    return binarySearch(array.slice(0, midpoint), target, startIndex);
  } else {
    return midpoint + startIndex;
  }
};


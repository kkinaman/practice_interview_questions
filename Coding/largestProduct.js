/*
SOLUTION INVOLVING KEEPING TRACK OF HIGHEST AND LOWEST PRODUCTS OF TWO INTEGERS

Given an arrayOfInts, find the largestProductOfThree you can get from three of the integers.
Constraints: linear time, constant space
*/

function largestProductOfThree(arrayOfInts) {
  //declare variables to keep track of the 'highest' integers so far -- starting with first two elements
  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);
  let highestProd2 = highest * lowest;
  let lowestProd2 = highest * lowest;

  let largestProduct = highestProd2 * arrayOfInts[2];

  //at each new element, check if cur times either prod of two would be larger than the largest product
  for (let i = 2; i < arrayOfInts.length; i++) {
    let cur = arrayOfInts[i];

    largestProduct = Math.max(largestProduct, highestProd2 * cur, lowestProd2 * cur);

    highestProd2 = Math.max(highestProd2, cur * highest, cur * lowest);

    lowestProd2 = Math.min(lowestProd2, cur * highest, cur * lowest);

    highest = Math.max(highest, cur);

    lowest = Math.min(lowest, cur);

  }
  return largestProduct;
}

//all positives
console.log(largestProductOfThree([4, 2, 8, 1, 3]));    // 96
console.log(largestProductOfThree([1, 2, 3, 4, 5]));    // 60
//all negatives
console.log(largestProductOfThree([-3, -10, -1, -2]));  // -6
console.log(largestProductOfThree([-3, -2, -1]));       // -6
//mix of positive and negatives
console.log(largestProductOfThree([2, 5, -6, 7, 1]));   // 70
console.log(largestProductOfThree([2, 5, 1, -4, 3]));   // 30
console.log(largestProductOfThree([-1, -4, 1, 4]));     // 16
console.log(largestProductOfThree([-1, -4, -2, 3]));    // 24
console.log(largestProductOfThree([2, -5, -6, 7, -1])); // 210
console.log(largestProductOfThree([-1, 2, -3, 4]));     // 12
//include 0
console.log(largestProductOfThree([4, 0, -5, 2]));      // 0
console.log(largestProductOfThree([0, 0, 0]));          // 0
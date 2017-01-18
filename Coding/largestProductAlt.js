/*
SOLUTION INVOLVING KEEPING TRACK OF TWO HIGHEST AND TWO LOWEST INTEGERS

Given an arrayOfInts, find the largestProductOfThree you can get from three of the integers.
Constraints: linear time, constant space
*/

function largestProductOfThree(arrayOfInts) {

  findLargest = (arr) => arr.reduce((highest, cur) => Math.max(highest, cur));
  findSmallest = (arr) => arr.reduce((lowest, cur) => Math.min(lowest, cur));

  let largestProduct = -Infinity;
  let highestPositives = [];
  let lowestNegatives = [];
  let hasZero = false;

  for (let i = 0; i < 2; i++) {
    let cur = arrayOfInts[i];
    if (cur > 0) {
      highestPositives.push(cur);
    } else if (cur < 0) {
      lowestNegatives.push(cur);
    } else {
      hasZero = true;
    }
  }

  for (let i = 2; i < arrayOfInts.length; i++) {
    let cur = arrayOfInts[i];
    if (highestPositives.length === 2 && cur * highestPositives[0] * highestPositives[1] > largestProduct) {
      largestProduct = cur * highestPositives[0] * highestPositives[1];
    } else if (lowestNegatives.length === 2 && cur * lowestNegatives[0] * lowestNegatives[1] > largestProduct) {
      largestProduct = cur * lowestNegatives[0] * lowestNegatives[1];
    } else if (highestPositives.length && lowestNegatives.length && cur * findLargest(highestPositives) * findSmallest(lowestNegatives) > largestProduct) {
      largestProduct = cur * findLargest(highestPositives) * findSmallest(lowestNegatives);
    }

    if (cur > 0) {
      if (highestPositives.length < 2) {
        highestPositives.push(cur);
      } else if (cur > Math.min(highestPositives[0], highestPositives[1])) {
        highestPositives = [cur, Math.max(highestPositives[0], highestPositives[1])];
      }
    } else if (cur < 0) {
      if (lowestNegatives.length < 2) {
        lowestNegatives.push(cur);
      } else if (cur < Math.max(lowestNegatives[0], lowestNegatives[1])) {
        lowestNegatives = [cur, Math.min(lowestNegatives[0], lowestNegatives[1])];
      }
    } else {
      hasZero = true
    }
  }
  return largestProduct < 0 ? hasZero ? 0 : largestProduct : largestProduct;
}

//all positives
console.log(largestProductOfThree([4, 2, 8, 1, 3]));    // 96
console.log(largestProductOfThree([1, 2, 3, 4, 5]));    // 60
//all negatives
console.log(largestProductOfThree([-3, -10, -1, -2]));  // -6 TODO
console.log(largestProductOfThree([-3, -2, -1]));       // -6
//mix of positive and negatives
console.log(largestProductOfThree([2, 5, -6, 7, 1]));   // 70
console.log(largestProductOfThree([2, -5, -6, 7, 1]));  // 210
console.log(largestProductOfThree([-1, 2, -3, 4]));     // 12
//include 0
console.log(largestProductOfThree([4, 0, -5, 2]));      // 0
/*
Given an arrayOfInts, find the largestProductOfThree you can get from three of the integers.
Constraints: linear time, constant space
*/

function largestProductOfThree(arrayOfInts) {
  let largestProduct = -Infinity;

  //declare variables to keep track of the 'highest' integers so far
  let highestPosProd = 0; //highestPosProd is the product of the two highest positive integers
  let mostPositive = -Infinity; //the highest positive integer
  let lowestNegProd = 0; //lowestNegProd is the product of the most positive positive integer and most negative integer
  let mostNegative = Infinity; //the lowest negative integer

  //consider the first two integers and save them to the appropriate variables
  if (arrayOfInts[0] * arrayOfInts[1] > highestPosProd) { //if both are positive or both are negative
    highestPosProd = arrayOfInts[0] * arrayOfInts[1];
    mostPositive = Math.max(arrayOfInts[0], arrayOfInts[1]);
  } else if (arrayOfInts[0] * arrayOfInts[1] < lowestNegProd) { //if one is pos and one is neg
    lowestNegProd = arrayOfInts[0] * arrayOfInts[1];
    mostNegative = Math.min(arrayOfInts[0], arrayOfInts[1]);
  }
  //TODO WHAT ABOUT ZERO
  //at each new element, check if it times the larger two would be larger than the largest product
  for (let i = 2; i < arrayOfInts.length; i++) {
    let cur = arrayOfInts[i];
    if (highestPosProd * cur > largestProduct) { // then cur must also be positive
      largestProduct = highestPosProd * cur;
      if (cur > (highestPosProd / mostPositive)) { //if cur is greater than the lower of the highest two positive integers
        highestPosProd = cur * mostPositive; //update highestPosProd
        mostPositive = Math.max(cur, mostPositive); //update mostPositive if cur is also greater than current mostPositive
        lowestNegProd = mostPositive * mostNegative; //update lowestNegProd incase mostPositive was updated
      }
    } else if (lowestNegProd * cur > largestProduct) { //then cur must be negative
      largestProduct = lowestNegProd * cur;
      mostNegative = Math.min(cur, mostNegative); //update mostNegative if cur is less than current mostNegative
      lowestNegProd = mostPositive * mostNegative; //update lowestNegProd incase mostNegative was updated
    }
  }
  return largestProduct;
}

//all positives
console.log(largestProductOfThree([4, 2, 8, 1, 3]));    // 96 TODO
console.log(largestProductOfThree([1, 2, 3, 4, 5]));    // 60
//all negatives
console.log(largestProductOfThree([-3, -10, -1, -2]));  // -6
console.log(largestProductOfThree([-3, -2, -1]));  // -6
//mix of positive and negatives
console.log(largestProductOfThree([2, 5, -6, 7, 1]));   // 70 TODO
console.log(largestProductOfThree([2, -5, -6, 7, 1]));  // 210 TODO
console.log(largestProductOfThree([-1, 2, -3, 4]));     // 12 TODO
//include 0
console.log(largestProductOfThree([4, 0, -5, 2]));      // 0 TODO
/*
Write a function maxDuffelBagValue() that takes a list of cake type tuples and a weight capacity, 
and returns the maximum monetary value the duffel bag can hold.
*/

function maxDuffelBagValue(tuples, capacity) {
  let maxValue = -Infinity;
  function recurse(options, weightSoFar, valSoFar) {
    for (var i = 0; i < options.length; i++) {
      let option = options[i];
      if (option[0] !== 0) {
        if (weightSoFar + option[0] < capacity) {
          recurse(options.slice(i), weightSoFar + option[0], valSoFar + option[1]);
        } else if (weightSoFar + option[0] === capacity && valSoFar + option[1] > maxValue) {
          maxValue = valSoFar + option[1];
        }
      }
    }
  }
  recurse(tuples, 0, 0);
  return maxValue === -Infinity ? 0 : maxValue;
}

// function maxDuffelBagValue(tuples, capacity) {
//   let highestValsAtWeight = {0: 0};
//   for (var i = 1; i < capacity; i++) {
//     //if any of the cakes' weights are i or if any two previously evaluated weights add to i, store the highest of those at this index
//     let highest = 
//     highestValsAtWeight[i] = 
//   }
// }

var cakeTuples = [[0, 0], [3, 90], [2, 15]];
var capacity = 20;

console.log(maxDuffelBagValue(cakeTuples, capacity));
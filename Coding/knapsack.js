/*
Write a function maxDuffelBagValue() that takes a list of cake type tuples and a weight capacity, 
and returns the maximum monetary value the duffel bag can hold.
*/

function maxDuffelBagValue(tuples, capacity) {
  let maxValue = -Infinity;
  function recurse(options, weightSoFar, valSoFar) {
    for (var i = 0; i < options.length; i++) {
      let option = options[i];
      if (weightSoFar + option[0] < capacity) {
        recurse(options.slice(i), weightSoFar + option[0], valSoFar + option[1]);
      } else if (weightSoFar + option[0] === capacity && valSoFar + option[1] > maxValue) {
        maxValue = valSoFar + option[1];
      }
    }
  }
  recurse(tuples, 0, 0);
  return maxValue;
}

var cakeTuples = [[7, 160], [3, 90], [2, 15]];
var capacity = 20;

console.log(maxDuffelBagValue(cakeTuples, capacity));
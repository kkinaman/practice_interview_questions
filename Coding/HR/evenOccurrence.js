/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  // Create an object that will map a number (key) to a number of occurrenecs (value)
  var occurrences = {};
  // for each item in the array
  for (var i = 0; i < arr.length; i++) {
    //if the number is not in the object
    if (!occurrences[arr[i]]) {
      // add the key with the value 1
      occurrences[arr[i]] = 1;
    }
    //else
    else {
      //increment the value of that key by 1
      occurrences[arr[i]]++;
    }
  }

  //for each item in array
  for (var i = 0; i < arr.length; i++) {
    //check its corresponding value in object
    var numOccur = occurrences[arr[i]];
    //if it's even
    if (numOccur % 2 === 0) {
      //return it
      return arr[i];
    }
  }

  return null;
};

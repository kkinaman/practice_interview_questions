/*
Given an array of integers, output an array with all 0s shifted to the left, maintaining the order of all other elements
Example: 
  input: [2, 6, 14, 0, 3, 0, 10]
  output: [0, 0, 2, 6, 14, 3, 10]
Constraints: O(n) time, O(1) space
*/

function moveZeros(array) {
  //start read pointer and write pointer at nearest zero from end
  let readP = array.length - 1;
  while (array[readP] !== 0 && readP >= 0) {
    readP--;
  }
  let writeP = readP;
  //while read pointer hasnt reached beginning of array
  while (readP >= 0) {
    //move read pointer left until find non-zero element, then:
    if (array[readP] !== 0) {
      //write this value at the index of write pointer
      array[writeP] = array[readP];
      //move write pointer left
      writeP--;
    }
    readP--;
  }
  //while write pointer hasnt reached beginning
  while (writeP >= 0) {
    //write 0s to remaining slots
    array[writeP] = 0;
    writeP--;
  }
  return array;
}

// var input = [2, 6, 14, 0, 3, 0, 10];  // [ 0, 0, 2, 6, 14, 3, 10 ]
// var input = [1, 1, 1, 1, 0, 0, 0];    // [ 0, 0, 0, 1, 1, 1, 1 ]
// var input = [0, 0];
var input = ['a', 'b', 0, 'c'];

console.log(moveZeros(input)); 

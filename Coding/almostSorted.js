/*
Given an almost-sorted array of size n, output yes or no if the array can be sorted in one operation.
Possible operations are: swap(a, b) and reverse(a, b)
  --> swap(a, b) swaps the elements at positions a and b
  --> reverse(a, b) reverses the order of all elemnts between indices a and b, inclusive
** Input is indexed from 1 to n
*/

function finishSort(arr) {  
  let n = arr.length;

  let isDecreasing = false;
  let indexOfFirstDecrease = null;
  let operationDone = false;
  let operationCommand = '';
  //for each element in array
  for (let i = 1; i < n; i++) {
    //decreasing
    if (arr[i - 1] > arr[i]) {
      //if an operation has already occurred, can't do another, so not possible
      if (operationDone) {
        console.log('no');
        return;
      }
      //if has already decreased but was not just decreasing, consider a swap
      if (indexOfFirstDecrease !== null && !isDecreasing) {
        //swap e.g [1, 9, 5, 7, 3]
        let temp = arr[i];
        arr[i] = arr[indexOfFirstDecrease];
        arr[indexOfFirstDecrease] = temp;
        operationCommand = 'swap ' + indexOfFirstDecrease + ' ' + i;
        operationDone = true;
      //...
      } else {
        isDecreasing = true;
        //want to store incase its a swap
        indexOfFirstDecrease = indexOfFirstDecrease === null ? i - 1 : indexOfFirstDecrease;
      }
    //increasing
    } else {
      //if it was previously decreasing
      if (isDecreasing) {
        isDecreasing = false;
        if (i - indexOfFirstDecrease > 2) {
          //reverse
          let startReverse = indexOfFirstDecrease === 0 ? 0 : indexOfFirstDecrease - 1;
          let endReverse = i === n - 1 ? i : i + 1;
          if (arr[indexOfFirstDecrease] <= endReverse && arr[i] >= startReverse) {
            operationCommand = 'reverse ' + indexOfFirstDecrease + ' ' + i;
            operationDone = true;
          } else {
            console.log('no');
            return;
          }
        }
        //else continue -- it was a single element out of order -- maybe we can swap
      }
    }
  }
  if (operationDone) {
    console.log('yes');
    console.log(operationCommand);
  } else {
    console.log('no');
  }
}

// console.log(finishSort([1, 5, 4, 3, 2, 6]));
// console.log(finishSort([4, 2]));
// console.log(finishSort([3, 1, 2]));
console.log(finishSort([1, 9, 5, 7, 3]));
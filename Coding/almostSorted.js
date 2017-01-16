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
        operationCommand = 'swap ' + (indexOfFirstDecrease + 1) + ' ' + (i + 1);
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
          let startReverse = indexOfFirstDecrease === 0 ? -Infinity : arr[indexOfFirstDecrease - 1];
          let endReverse = i === n - 1 ? Infinity : arr[i + 1];
          if (arr[indexOfFirstDecrease] <= endReverse && arr[i] >= startReverse) {
            operationCommand = 'reverse ' + (indexOfFirstDecrease + 1) + ' ' + (i + 1);
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
  if (!operationDone) {
    if (indexOfFirstDecrease !== null) {
      let i = n - 1;
      if (i - indexOfFirstDecrease > 2) {
        //reverse
        let startReverse = indexOfFirstDecrease === 0 ? -Infinity : arr[indexOfFirstDecrease - 1];
        let endReverse = i === n - 1 ? Infinity : arr[i + 1];
        if (arr[indexOfFirstDecrease] <= endReverse && arr[i] >= startReverse) {
          operationCommand = 'reverse ' + (indexOfFirstDecrease + 1) + ' ' + (i + 1);
          operationDone = true;
        } else {
          console.log('no');
          return;
        }
      } else {
        //swap
        let temp = arr[i];
        arr[i] = arr[indexOfFirstDecrease];
        arr[indexOfFirstDecrease] = temp;
        operationCommand = 'swap ' + (indexOfFirstDecrease + 1) + ' ' + (i + 1);
        operationDone = true;
        for (let j = 1; j < n; j++) {
          if (arr[j - 1] > arr[j]) {
            operationDone = false;
          }
        }
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

console.log(finishSort([1, 5, 4, 3, 2]));   //reverse 2 5
console.log(finishSort([4, 2]));            //swap 1 2
console.log(finishSort([3, 1, 2]));         //no
console.log(finishSort([1, 9, 5, 7, 3]));   //swap 2 5
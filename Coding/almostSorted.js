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
        swap(indexOfFirstDecrease, i);
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
          reverse(indexOfFirstDecrease, i);
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
        reverse(indexOfFirstDecrease, i);
      } else {
        swap(indexOfFirstDecrease, i);
      }
    }
  }
  if (operationDone) {
    console.log('yes');
    console.log(operationCommand);
  } else {
    console.log('no');
  }

  function swap(a, b) {
    let temp = arr[b];
    arr[b] = arr[a];
    arr[a] = temp;
    operationCommand = 'swap ' + (a + 1) + ' ' + (b + 1);
    operationDone = true;
    for (let j = 1; j <= b; j++) {
      if (arr[j - 1] > arr[j]) {
        operationDone = false;
      }
    }
  }

  function reverse(a, b) {
    let startReverse = a === 0 ? -Infinity : arr[a - 1];
    let endReverse = b === n - 1 ? Infinity : arr[b + 1];
    if (arr[a] <= endReverse && arr[b] >= startReverse) {
      operationCommand = 'reverse ' + (a + 1) + ' ' + (b + 1);
      operationDone = true;
    } else {
      console.log('no');
      return;
    }
  }
}

console.log(finishSort([1, 5, 4, 3, 2]));   //reverse 2 5
console.log(finishSort([4, 2]));            //swap 1 2
console.log(finishSort([3, 1, 2]));         //no
console.log(finishSort([1, 9, 5, 7, 3]));   //swap 2 5
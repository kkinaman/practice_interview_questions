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
          if (i - indexOfFirstDecrease === 3) {
            swap(indexOfFirstDecrease, i - 1);
          } else {
            reverse(indexOfFirstDecrease, i - 1);
          }
        }
        //else continue -- it was a single element out of order -- maybe we can swap
      }
    }
  }
  if (!operationDone) {
    //if there was an element(s) to be swapped/reversed, check if can do with last element
    if (indexOfFirstDecrease !== null) {
      let i = n - 1;
      if (i - indexOfFirstDecrease > 2) {
        reverse(indexOfFirstDecrease, i);
      } else {
        swap(indexOfFirstDecrease, i);
      }
    }
  }
  if (operationDone) {
    console.log('yes');
    console.log(operationCommand);
  } else if (!isDecreasing && indexOfFirstDecrease === null) {
    console.log('yes');
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

//reversing in middle of array
console.log(finishSort([1, 5, 4, 3, 2, 6]));//reverse 2 5
//reversing with last element
console.log(finishSort([1, 5, 4, 3, 2]));   //reverse 2 5
//reverse with first element
console.log(finishSort([3, 2, 1, 0, 4]));   //reverse 1 4
//reverse entire array
console.log(finishSort([4, 3, 2, 1]));      //reverse 1 4
//swap when only two elements
console.log(finishSort([4, 2]));            //swap 1 2
//swap when includes last element
console.log(finishSort([1, 9, 5, 7, 3]));   //swap 2 5
//swap when includes first element
console.log(finishSort([4, 2, 3, 1, 5]));   //swap 1 4
//swap rather than reverse
console.log(finishSort([3, 2, 1]));         //swap 1 3
console.log(finishSort([0, 3, 2, 1, 4, 5]));//swap 2 4
console.log(finishSort([1, 2, 3, 6, 5, 4]));//swap 4 6
//negative elements swap
console.log(finishSort([-1, -3, -2, -4]));  //swap 1 4
//negative elements reverse
console.log(finishSort([-2, -3, -4, -5]));  //reverse 1 4
console.log(finishSort([3, 1, 2]));         //no
console.log(finishSort([1, 3, 100, 2000, 12301498]));   //yes
console.log(finishSort([-5, -4, -3, -2, -1]));
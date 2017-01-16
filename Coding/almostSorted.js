/*
Given an almost-sorted array of size n, output yes or no if the array can be sorted in one operation.
Possible operations are: swap(a, b) and reverse(a, b)
  --> swap(a, b) swaps the elements at positions a and b
  --> reverse(a, b) reverses the order of all elemnts between indices a and b, inclusive
** Input is indexed from 1 to n
*/

function finishSort(arr) {  
  let n = arr.length;

  let hasDecreased = false;
  let decStart = 0;
  let decEnd = 0;
  let decreaseEnded = false;
  for (let i = 1; i < n; i++) {
    if (arr[i] < arr[i - 1]) {
      if (!hasDecreased) {
        //decreasing for the first time
        decStart = i - 1;
        hasDecreased = true;
      } else {
        if (decreaseEnded) {
          //decreasing for a second time -- not solvable in one operation
          console.log('no');
          return;
        } else {
          //still decreasing from first time
        }
      }
    } else {
      if (hasDecreased) {
        //decreasing has just ended
        decEnd = i - 1;
        decreaseEnded = true;
      }
    }
  }
  if (hasDecreased && decEnd === 0) {
    decEnd = n - 1;
  }
  if (!hasDecreased && !decreaseEnded) {
    console.log('yes');
    return;
  }
  if (decEnd - decStart > 1) {
    //reverse
    if (decEnd - decStart + 1 === n || arr[decStart] < arr[decEnd + 1] && arr[decEnd] > arr[decStart - 1]) {
      console.log('yes');
      console.log('reverse', decStart + 1, decEnd + 1);
      return;
    } else {
      console.log('no');
      return;
    }
  } else {
    //swap
    let temp = arr[decEnd];
    arr[decEnd] = arr[decStart];
    arr[decStart] = temp;
    for (let i = 1; i < n; i++) {
      if (arr[i] < arr[i - 1]) {
        console.log('no');
        return;
      }
    }
    console.log('yes');
    console.log('swap', decStart + 1, decEnd + 1);
  }
}

console.log(finishSort([1, 5, 4, 3, 2, 6]));
console.log(finishSort([4, 2]));
console.log(finishSort([3, 1, 2]));
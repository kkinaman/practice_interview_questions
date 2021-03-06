/*
An array is sorted alphabetically, but rotated to some degree, so the 'first' word is somewhere in the middle
Find the index of the 'first' word, or the rotation point
*/

function findRotationPoint(arr) {
  //find midpoint; split into two subarrays
  let midpoint = Math.floor(arr.length / 2);
  let startIndex = arguments[1] || 0;
  if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      return startIndex + 1;
    }
  }
  //compare first and last element of subarray
  //if the first element sorts higher than last element,
  if (arr[0] > arr[midpoint]) {
    //recurse on that half -- the rotation point is contained in there
    return findRotationPoint(arr.slice(0, midpoint + 1), startIndex);
  } else if (arr[midpoint + 1] > arr[arr.length - 1]) {
    return findRotationPoint(arr.slice(midpoint + 1), startIndex + midpoint + 1);
  } else {
    if (arr[midpoint] > arr[midpoint + 1]) {
      return startIndex + midpoint + 1;
    } else {
      return 0;
    }
  }
}

var words1 = [ 
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'zebra',
  'asymptote', // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
  'pig',
];

var words2 = [
  'asymptote', // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
  'pig',
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'zebra',
];

var words3 = [
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
  'pig',
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'zebra',
  'asymptote', // <-- rotates here!
];

var words4 = [
  'karpatka',
  'othellolagkage',
  'pig',
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'zebra',
  'asymptote', // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
];


console.log(findRotationPoint(words1)); // 6 middle
console.log(findRotationPoint(words2)); // 0 first
console.log(findRotationPoint(words3)); //12 last
console.log(findRotationPoint(words4)); // 9 random
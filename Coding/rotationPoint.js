/*
An array is sorted alphabetically, but rotated to some degree, so the 'first' word is somewhere in the middle
Find the index of the 'first' word, or the rotation point
*/

function findRotationPoint(arr) {
  //find midpoint; split into two subarrays
  let midpoint = Math.floor(arr.length / 2);
  //compare first and last element of subarray
  //if the first element sorts higher than last element,
  if (arr[0] > arr[midpoint - 1]) {
    //recurse on that half -- the rotation point is contained in there
    return findRotationPoint(arr.slice(0, midpoint));
  } else if (arr[midpoint + 1] > arr[arr.length - 1]) {
    return findRotationPoint(arr.slice(midpoint));
  } else {
    return midpoint;
  }
}

var words = [
  'zigzag',
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
  'xenoepist'
];
console.log(findRotationPoint(words));
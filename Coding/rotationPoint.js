/*
An array is sorted alphabetically, but rotated to some degree, so the 'first' word is somewhere in the middle
Find the index of the 'first' word, or the rotation point
*/

function findRotationPoint(arr) {

}

var words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote', // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];
console.log(findRotationPoint(words));
/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
  var results = [];
  var uniqueStr = str.split('').filter((char, i) => {
    return str.indexOf(char) === i;
  }).join('');
  //recursive function (stringsofar, stringleft)
  var recurse = function(stringSoFar, stringLeft) {
    //add this to results
    results.push(stringSoFar);
    //for each char in string left
    for (var i = 0; i < stringLeft.length; i++) {
      //add to stringsofar
      var newStrSoFar = stringSoFar.concat(stringLeft[i]);
      //remove from stringleft
      var newStringLeft = stringLeft.slice(i + 1);
      //recurse with new stringsofar and stringleft
      recurse(newStrSoFar, newStringLeft);
    }
  }
  //call recursive function on '' and str
  recurse('', uniqueStr);

  return results;
};

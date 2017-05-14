/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
  var longestPal = '';
  var curPal = '';

  var checkForPal = function(palindrome, firstI, lastI) {
    curPal = palindrome;
    if (string[firstI - 1] && string[lastI + 1]) {
      var prev = string[firstI - 1];
      var next = string[lastI + 1];
      if (prev === next) {
        curPal = prev + curPal + next;
        return checkForPal(curPal, firstI - 1, lastI + 1);
      }
    }
    if (curPal.length > longestPal.length) {
      longestPal = curPal;
    }
  }

  for (var i = 0; i < string.length; i++) {
    checkForPal(string[i], i, i);
    if (string[i+1] && string[i] === string[i+1]) {
      checkForPal(string[i] + string[i+1], i, i+1);
    }
  }
  return longestPal;
};

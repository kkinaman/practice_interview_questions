/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  if (string.length === 0) {
    return null;
  }
  var longestRun = 0;
  var start = 0;
  var end = 0;

  var index = 0;
  var curCount = 0;
  var cur = string[index];

  while (cur) {
    var curStart = index;
    while (cur === string[index]) {
      curCount++;
      index++;
    }
    var curEnd = index - 1;
    if (curCount > longestRun) {
      longestRun = curCount;
      start = curStart;
      end = curEnd;
    }
    cur = string[index];
    curCount = 0;
  }

  return [start, end];
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

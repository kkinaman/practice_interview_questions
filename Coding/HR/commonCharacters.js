/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function() {
  var numArgs = arguments.length;
  var string1 = arguments[0];
  var intersection = [];
  for (var i = 0; i < string1.length; i++) {
    var curChar = string1[i];
    var add = true;
    for (var j = 1; j < numArgs; j++) {
      var curArg = arguments[j];
      //If curChar is a space or the current argument does not include this char or the intersection already includes this
      if (curChar === ' ' || curArg.indexOf(curChar) === -1 || intersection.indexOf(curChar) !== -1) {
        //mark that we are not going to add it
        add = false;
        break;
      }
    }
    if (add) {
      intersection.push(curChar);
    }
  }
  return intersection.join('');
};

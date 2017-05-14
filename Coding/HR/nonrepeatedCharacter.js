/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var unique = [];
  var duplicates = [];
  // Iterate through string
  for (var i = 0; i < string.length; i++) {
    var curChar = string[i];
    // If character in array unique,
    if (unique.indexOf(curChar) !== -1) {
      // And not already in duplicate
      if (duplicates.indexOf(curChar) === -1) {
        //Save to array, duplicate
        duplicates.push(curChar);
      }
    } else {
      //Save character to array unique
      unique.push(curChar);
    }
  }
  //Find first character that is not in duplicate
  for (var i = 0; i < unique.length; i++) {
    if (duplicates.indexOf(unique[i]) === -1) {
      return unique[i];
    }
  }
  //If no nonrepeated characters, return null
  return null;
};

/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  var results = [];

  function recurse(anagram, strLeft) {
    if (anagram.length === string.length) {
      results = addTo(results, anagram);
    } else {
      for (var i = 0; i < strLeft.length; i++) {
        var curChar = strLeft[i];
        var strArr = strLeft.split('');
        strArr.splice(i, 1);
        recurse(anagram + strLeft[i], strArr.join(''));
      }
    }
  };

  function addTo(results, anagram) {
    if (results.indexOf(anagram) === -1) {
      results.push(anagram);
    }
    return results;
  };

  recurse('', string);
  return results;
};

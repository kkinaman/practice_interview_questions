/*
Check if any permutation of a string is a palindrome
*/

function permutationPalindrome(str) {
  let letterChecker = {};
  for (var i = 0; i < str.length; i++) {
    if (letterChecker[str[i]]) {
      delete letterChecker[str[i]];
    } else {
      letterChecker[str[i]] = true;
    }
  }
  return Object.keys(letterChecker).length <= 1;
}

console.log(permutationPalindrome('civic')); //true
console.log(permutationPalindrome('ivcci')); //true
console.log(permutationPalindrome('civil')); //false
console.log(permutationPalindrome('aabbccddeeffh')); //true
console.log(permutationPalindrome('aabbccddeeffha')); //false
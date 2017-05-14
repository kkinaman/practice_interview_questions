// Given a string, return the longest palindrome that can be made with the letters in that string
//
// Further thoughts: Can this be done in constant space?

function makePalindrome(str) {
    let occurrences = {};
    str.split('').forEach(char => occurrences[char] = occurrences[char] ? occurrences[char] + 1 : 1) //linear time re: length of str
    let middleLetter = null;
    for (letter in occurrences) { //linear time re: number of unique letters
        if (occurrences[letter] === 1) {
            middleLetter = letter;
            delete occurrences[letter];
        } else if (occurrences[letter] % 2 === 1) {
            middleLetter = letter;
        }
    }
    let palindrome = middleLetter ? middleLetter : '';
    for (key in occurrences) { //linear re: less than length of str
        for (let i = 1; i <= Math.floor(occurrences[key] / 2); i++) {
            palindrome = key + palindrome + key;
        }
        delete occurrences[key];
    }
    return palindrome;
}

console.log('abcc', makePalindrome('abcc'));
console.log('aaab', makePalindrome('aaab'));
console.log('aaaabbb', makePalindrome('aaaabbb'));
console.log('aaabbb', makePalindrome('aaabbb'));
console.log('aaabbbccc', makePalindrome('aaabbbccc'));
console.log('abcclakdsjfkadfj', makePalindrome('abcclakdsjfkadfj'));

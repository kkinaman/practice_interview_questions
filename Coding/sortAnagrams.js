/*
Given an array of words, output together words that are anagrams of each other, separating groups of words by a new line

e.g.

Input: [act, cat, spot, stop, go]
Output: 
act cat
spot stop
go
*/

function sortAnagrams(words) {
  let anagrams = {};
  words.forEach(word => {
    let wordCopy = word.split('').sort().join('');
    anagrams[wordCopy] = anagrams[wordCopy] ? anagrams[wordCopy].concat(word) : [word];
  });
  Object.keys(anagrams).forEach(group => {
    console.log(anagrams[group].join(' '));
  });
}

var words = ['act', 'cat', 'spot', 'stop', 'go'];
console.log(sortAnagrams(words));
/*
Given a string, output it reversed
O(n) time, O(1) space
*/

function reverseString(str) {
  let chars = str.split('');
  let mid = Math.floor(chars.length / 2);
  let iter = 0;
  while (iter < mid) {
    let temp = chars[iter];
    chars[iter] = chars[chars.length - 1 - iter];
    chars[chars.length - 1 - iter] = temp;
    iter++;
  }
  return chars.join('');
}

var string = 'hello there ;)';

console.log(reverseString(string));



function reverseSentence(sentence) {
  let words = sentence.split(' ');
  let mid = Math.floor(words.length / 2);
  let iter = 0;
  while (iter < mid) {
    let temp = words[iter];
    words[iter] = words[words.length - 1 - iter];
    words[words.length - 1 - iter] = temp;
    iter++;
  }
  return words.join(' ');
}

var sentence = 'I like to eat eggs';
console.log(reverseSentence(sentence));



function reverseBySeparator(str, separator) {
  let chunks = str.split(separator);
  let mid = Math.floor(chunks.length / 2);
  let iter = 0;
  while (iter < mid) {
    let temp = chunks[iter];
    chunks[iter] = chunks[chunks.length - 1 - iter];
    chunks[chunks.length - 1 - iter] = temp;
    iter++;
  }
  return chunks.join(separator);
}

console.log(reverseBySeparator(string, ''));
console.log(reverseBySeparator(sentence, ' '));
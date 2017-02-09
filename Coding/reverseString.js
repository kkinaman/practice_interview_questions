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
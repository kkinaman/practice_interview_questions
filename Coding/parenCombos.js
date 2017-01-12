/*
Given an integer n, which represents a number of paren pairs, output all combinations of n valid parens

Example:
  n = 3
  output: ['()()()', '()(())', '(())()', '(()())', ((()))']
*/

function parenCombos(n) {
  //define array of possibilities
  let possibilities = [];
  //define recursive helper function with inputs stringSoFar, numToOpen, numToClose
  function recurse(stringSoFar, numToOpen, numToClose) {
    //if there are no more to close and still some to open
    if (numToClose === 0 && numToOpen > 0) {
      //only option is to open -- recurse on string plus '(' with numToOpen - 1, numToClose = 1
      recurse(stringSoFar + '(', numToOpen - 1, 1);
    } else if (numToOpen === 0) { //if there are no more to open
      //only option is to close the rest -- while numToClose > 0, add ')'
      while (numToClose > 0) {
        stringSoFar += ')';
        numToClose--;
      }
      //add this option to possibilities
      possibilities.push(stringSoFar);
    } else {
      //recurse on string plus a new '(' with numToOpen - 1, numToClose + 1
      recurse(stringSoFar + '(', numToOpen - 1, numToClose + 1);
      //recurse on string plus a new ')' with numToOpen the same, numToClose - 1
      recurse(stringSoFar + ')', numToOpen, numToClose - 1);
    }
  }
  //call recurse on empty string with n to open, 0 to close
  recurse('', n, 0);
  //return possibilities
  return possibilities;
}

var n = 3;  //['()()()', '()(())', '(())()', '(()())', ((()))']
// var n = 2;
// var n = 4;
console.log(parenCombos(n));

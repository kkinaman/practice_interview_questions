/*
Given an integer n, which represents a number of paren pairs, output all combinations of n valid parens

Example:
  n = 3
  output: ['()()()', '()(())', '(())()', '(()())', ((()))']
*/

function parenCombos(n) {
  //define array of possibilities
  //define recursive helper function with inputs stringSoFar, numToOpen, numToClose
    //if numtoClose is 0 and numToOpen > 0
      //only option is to open -- recurse on string plus '(' with numToOpen - 1, numToClose = 1
    //if numToOpen is 0
      //only option is to close the rest -- while numToClose > 0
        // add ')'
      //add this option to possibilities
    //else
      //recurse on string plus a new '(' with numToOpen - 1, numToClose + 1
      //recurse on string plus a new ')' with numToOpen the same, numToClose - 1
  //return possibilites
  return [];
}

var n = 3;  //['()()()', '()(())', '(())()', '(()())', ((()))']
console.log(parenCombos(n));
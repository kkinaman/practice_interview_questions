/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input) {
  var stack = [];
  var openers = ['(', '[', '{'];
  var closers = [')', ']', '}'];
  var parenMatch = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for (var i = 0; i < input.length; i++) {
    var curParen = input[i];
    //if the paren is an opener, push to the stack
    if (openers.indexOf(curParen) !== -1) {
      stack.push(curParen);
    } else if (closers.indexOf(curParen) !== -1) { //else if it is a closer, pop the last off the stack and they should be 'matching'
      var popped = stack.pop();
      if (curParen !== parenMatch[popped]) {
        return false;
      }
    } //ignore all non paren characters
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
};



/*
0-9 Push this number onto the stack.
+ Addition: Pop a and b, then push a+b.
- Subtraction: Pop a and b, then push b-a.
* Multiplication: Pop a and b, then push a*b.
/ Integer division: Pop a and b, then push b/a, rounded down. If a is zero, push zero.
% Modulo: Pop a and b, then push the b%a. If a is zero, push zero.
! Logical NOT: Pop a value. If the value is zero, push 1; otherwise, push zero.
` Greater than: Pop a and b, then push 1 if b>a, otherwise push zero.
> Start moving right.
< Start moving left.
^ Start moving up.
v Start moving down.
? Start moving in a random cardinal direction.
_ Pop a value; move right if value = 0, left otherwise.
| Pop a value; move down if value = 0, up otherwise.
" Start string mode: push each character's ASCII value all the way up to the next ".
: Duplicate value on top of the stack. If there is nothing on top of the stack, push a 0.
\ Swap two values on top of the stack. If there is only one value, pretend there is an extra 0 on bottom of the stack.
$ Pop value from the stack and discard it.
. Pop value and output as an integer.
, Pop value and output the ASCII character represented by the integer code that is stored in the value.
# Trampoline: Skip next cell.
p A "put" call (a way to store a value for later use). Pop y, x and v, then change the character at the position (x,y) in the program to the character with ASCII value v.
g A "get" call (a way to retrieve data in storage). Pop y and x, then push ASCII value of the character at that position in the program.
@ End program.
(i.e. a space) No-op. Does nothing.

interpret('>987v>.v\nv456<  :\n>321 ^ _@') //'123456789'

*/

function interpret(code) {
  let rows = code.split('\n');
  let output = '';
  let stack = [];

  let processing = true;
  let row = 0;
  let col = 0;
  let cur = rows[row][col];
  let directions = ['r', 'l', 'u', 'd'];
  let direction = 'r'; //default direction is to the right
  while (processing) {
    //directional operations
    if (cur.match(/[\>\<\^v]/)) {
      direction = cur === '>' ? 'r' : cur === '<' ? 'l' : cur === '^' ? 'u' : cur === 'v' ? 'd' : directions[Math.floor(Math.random * 4)];
    }
    //integers
    if (cur.match(/[0-9]/)) {
      stack.push(cur);
    }
    //math operators
    if (cur.match(/[\+\-\*\/\%\`]/)) {
      let a = stack.pop();
      let b = stack.pop();
      let newVal = cur === '+' ? a + b : cur === '-' ? b - a : cur === '*' ? a * b : cur === '/' ? a === 0 ? 0 : Math.floor(b / a) :
        cur === '%' ? a === 0 ? 0 : b % a : cur === '`' ? b > a ? 1 : 0 : null;
      stack.push(newVal);
    }
    //pop and...
    if (cur.match(/[_|$.,]/)) {
      let val = stack.pop();
      cur === '_' ? val === 0 ? direction = 'r' : direction = 'l' : cur === '|' ? val === 0 ? direction = 'd' : direction = 'u' :
        cur === '.' ? output = output.concat(parseInt(val)) : cur === ',' ? output = output.concat(String.fromCharCode(val)) : null;
    }
    //put & get

    //logical not

    //string
    if (cur === '"') {
      col++;
      cur = rows[row][col];
      while (cur !== '"') {
        stack.push(cur.charCodeAt(0));
        col++;
        cur = rows[row][col];
      }
    }
    //duplicate
    if (cur === ':') {
      let top = stack.pop();
      if (top) {
        stack.push(top);
        stack.push(top);
      } else {
        stack.push(0);
      }
    }
    //swap

    //trampoline

    //end of input
    if (cur === '@') {
      processing = false;
    }

    //continue in last specified direction
    direction === 'r' ? col++ : direction === 'l' ? col-- : direction === 'u' ? row-- : row++;
    cur = rows[row][col];
  }

  return output;
}
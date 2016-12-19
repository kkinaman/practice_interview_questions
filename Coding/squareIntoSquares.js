/*
Task

Given a positive integral number n, return a strictly increasing sequence (list/array/string depending on the language) 
of numbers, so that the sum of the squares is equal to n².

If there are multiple solutions (and there will be), return the result with the largest possible values:

Examples

decompose(11) must return [1,2,4,10]. Note that there are actually two ways to decompose 11², 
11² = 121 = 1 + 4 + 16 + 100 = 1² + 2² + 4² + 10² but don't return [2,6,9], since 9 is smaller than 10.

For decompose(50) don't return [1, 1, 4, 9, 49] but [1, 3, 5, 8, 49] 
since [1, 1, 4, 9, 49] doesn't form a strictly increasing sequence.

Note

Neither [n] nor [1,1,1,…,1] are valid solutions. 
If no valid solution exists, return nil, null, Nothing, None (depending on the language) or "" (Java, C#) or {} (C++).
*/

function decompose(n) {
  var solution = [];

  function recurse(curN, valLeft, sequence) {
    for (var i = curN - 1; i > 0; i--) {
      if (solution.length) {
        return;
      }
      let subtractedVal = valLeft - (i * i);
      if (subtractedVal === 0) {
        solution = [i].concat(sequence);
      } else if (subtractedVal > 0) {
        recurse(i, subtractedVal, [i].concat(sequence));
      }
    }
  }

  recurse(n, n * n, []);
  return solution.length ? solution : null;
}


console.log(decompose(2)); //null
console.log(decompose(7)); //[2, 3, 6]
console.log(decompose(11)); //[1,2,4,10]
console.log(decompose(50)); //[1, 3, 5, 8, 49]
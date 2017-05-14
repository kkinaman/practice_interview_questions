/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix) {
  let results = [];
  let leftCol = 0, rightCol = matrix[0].length - 1, topRow = 0, bottomRow = matrix.length - 1;

  while (leftCol <= rightCol && topRow <= bottomRow) {
    for (var i = leftCol; i <= rightCol; i++) {
      results.push(matrix[topRow][i]);
    }
    topRow++;
    for (var i = topRow; i <= bottomRow; i++) {
      results.push(matrix[i][rightCol]);
    }
    rightCol--;
    if (bottomRow - topRow > 0 && rightCol - leftCol > 0) {
      for (var i = rightCol; i >= leftCol; i--) {
        results.push(matrix[bottomRow][i]);
      }
      bottomRow--;
      for (var i = bottomRow; i >= topRow; i--) {
        results.push(matrix[i][leftCol]);
      }
      leftCol++;
    }
  }

  return results;
};

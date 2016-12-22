/*
Your task, is to create a NxN spiral with a given size.

For example, spiral with size 5 should look like this:

00000
....0
000.0
0...0
00000
and with the size 10:

0000000000
.........0
00000000.0
0......0.0
0.0000.0.0
0.0..0.0.0
0.0....0.0
0.000000.0
0........0
0000000000
Return value should contain array of arrays, of 0 and 1, for example for given size 5 result should be:

[[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
Because of the edge-cases for tiny spirals, the size will be at least 5.

General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.
*/

var spiralize = function(size) {
  let spiral = [];

  //initialize matrix of size x size 
  for (var i = 0; i < size; i++) {
    spiral.push(new Array(size + 1).join('0').split('').map(parseFloat));
  }

  let leftCol = 0, rightCol = size - 1, topRow = 0, bottomRow = size - 1;

  while (leftCol <= rightCol && topRow <= bottomRow) {

    for (var i = leftCol; i <= rightCol; i++) {
      spiral[topRow][i] = 1;
    }
    topRow++;
    leftCol === 0 ? null : leftCol++;

    for (var i = topRow; i <= bottomRow; i++) {
      spiral[i][rightCol] = 1;
    }
    rightCol--;
    topRow++;
    
    if (bottomRow - topRow > 1) {
      for (var i = rightCol; i >= leftCol; i--) {
        spiral[bottomRow][i] = 1;
      }
      bottomRow--;
      rightCol--;

      for (var i = bottomRow; i >= topRow; i--) {
        spiral[i][leftCol] = 1;
      }
      leftCol++;
      bottomRow--;
    }
  }

  return spiral;
};

var spiral = spiralize(5);
for (var i = 0; i < spiral.length; i++) {
  console.log(spiral[i]);
}

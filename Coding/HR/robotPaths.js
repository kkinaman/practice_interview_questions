/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};

var robotPaths = function(n, board, i, j) {
  var numPaths = 0;

  function recurse(board, path, i, j) {
    var boardCopy = board;
    boardCopy.togglePiece(i, j);
    var possibleMoves = [ [i + 1, j], //down
                          [i - 1, j], //up
                          [i, j - 1], //left
                          [i, j + 1] //right
                        ];
    possibleMoves.forEach(square => {
      var y = square[0];
      var x = square[1];
      if (y < 0 || x < 0 || y >= n || x >= n || board.hasBeenVisited(y, x)) {
        return;
      } else if (y === n - 1 && x === n - 1) {
        numPaths++;
        return;
      } else {
        path.push[y, x];
        recurse(boardCopy, path, y, x);
      }
    });
  }

  recurse(board, [], i, j);

  return numPaths;
};


//input: filepath as a string -- the file contains triples [x, y, ascii code]
//output a 100 x 100 grid of characters where the char from ascii code is located at x, y

let fs = require('fs');

//makes an array of size n (rows) x m (cols) filled with char
function makeArray(n, m, char) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < m; j++) {
      temp.push(char);
    }
    arr.push(temp);
  }
  return arr;
}

function printMatrix(matrix) {
  matrix.forEach(arr => console.log(arr.join('')));
}

function makeArt(filepath) {
  let input = fs.readFileSync(filepath).toString().split('\n');
  let output = makeArray(100, 100, ' ');
  input.forEach(line => {
    if (line !== '') {
      let triple = JSON.parse(line);
      output[triple[1]][triple[0]] = String.fromCharCode(triple[2]);
    }
  });
  printMatrix(output);
}

makeArt('data.txt');
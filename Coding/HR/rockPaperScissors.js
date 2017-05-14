/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (n) {
  if (n === undefined) {
    n = 3;
  }
  var options = ['rock', 'paper', 'scissors'];
  var outputs = [];

/** FOR THREE ROUNDS **/
  // //for each first option
  // for (var i = 0; i < options.length; i++) {
  //   //for each second option
  //   for (var j = 0; j < options.length; j++) {
  //     //for each third option
  //     for (var k = 0; k < options.length; k++) {
  //       //add combo to outputs
  //       outputs.push([options[i], options[j], options[k]]);
  //     }
  //   }
  // }

/** RECURSIVE EXPONENTIAL TIME-COMPLEXITY SOLUTION TO N-ROUNDS **/
  // var recurse = function(combo) {
  //   if (combo.length === n) {
  //     outputs.push(combo);
  //   } else {
  //     for (var i = 0; i < options.length; i++) {
  //       recurse(combo.concat(options[i]));
  //     }
  //   }
  // }
  // recurse([]);

/** LOWER TIME-COMPLEXITY SOLUTION TO N-ROUNDS **/
  var combo = [];
  var canIncrement = true;
  //first combo is all the first option
  for (var i = 0; i < n; i++) {
    combo.push(options[0]);
  }
  outputs.push(combo);

  
  var increment = function(combo) {
    //make a copy of combo so that we don't alter the original
    var newCombo = [].concat(combo);
    //iterate though combo, starting at the last index
    for (var i = newCombo.length-1; i >= 0; i--) {
      var curOption = newCombo[i];
      var curOptionIndex = options.indexOf(curOption);
      //check if this index can be incremented (to another option)
      if (curOptionIndex < options.length - 1) {
        //increment it to the next option
        newCombo[i] = options[curOptionIndex + 1];
        //return the new newCombo
        console.log(newCombo);
        return newCombo;
      } // else we need to look at the next index, so set this back to the first option
      else {
        //so set this index back to the first option and the next iteration will inspect the previous index
        newCombo[i] = options[0];
      }
    }
    canIncrement = false;
  };

  //until we can no longer increment any indices
  while (canIncrement) {
    combo = increment(combo);
    outputs.push(combo);
    //find the last element that can be incremented (to the next option), increment it and push that combo
  }

  //an duplicat of the first combo get added at the end, so remove it
  outputs.splice(outputs.length - 1, 1);

  return outputs;

};


/*
Given A, an array of people's weights, B, an array of the floors they want to go to, M the number of floors, 
 X the capacity (#) of people in the elevator, and Y the capacity (weight) of people in the elevator,
 write a function that outputs how many stops the elevator will make to take all people.
 Note: The order of people waiting will not change, even if someone from the middle can fit in an elevator earlier
*/

function solution(A, B, M, X, Y) {
  let stops = 0;
  //while there are people in line
  while (A.length > 0) {
    let spacesLeft = X;
    let weightLeft = Y;
    let floorsToStopOn = {};
    //add people until capacities reached (num & weight)
    for (let i = 0; i < spacesLeft; i++) {
      if (weightLeft - A[0] >= 0) {
        weightLeft -= A[0]; //subtract their weight
        floorsToStopOn[B[0]] = true; //mark their floor
        A.shift(); //remove from queue
        B.shift();
      } else {
        break;
      }
    }
    //for each different floor that these people want, increment stops
    Object.keys(floorsToStopOn).forEach(floor => stops++);
    //increment stops for returning to bottom floor
    stops++;
  }
  return stops;
}

console.log(solution([40, 40, 100, 80, 20], [3, 3, 2, 2, 3], 3, 5, 200));
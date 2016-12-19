/*
Your GPS is broken and you need to get somewhere!

Luckily you've got a map and your algorithm skills intact. Your map is a rather strange one too: 
all the intersections are labeled with distinct integers and the roads connecting them are labeled 
with the time they take to drive in minutes.

You are standing at the intersection labeled start and your destination is the intersection labeled finish.

You will be provided the total number of intersections and an array of roads, each with the properties from, to 
(both intersection labels; integers less than the number of intersections) and drivingTime. 
Roads may only be used to go from from to to. If there is no road going the other way it is a one-way street.

Complete the function navigate(numberOfIntersections, roads, start, finish) so that it returns an array of intersections 
on the fastest route from start to finish (including start and finish).

If there are several such routes, pick any. If there are no such routes, return null.
*/

function navigate(numberOfIntersections, roads, start, finish) {
  var shortestPaths = {};
  shortestPaths[start] = {
    time: 0,
    path: [start]
  };
  var nodesToCheck = [start];
  while (nodesToCheck.length) {
    start = nodesToCheck.reduce((shortest, cur) => shortestPaths[shortest].time < shortestPaths[cur].time ? shortest : cur);
    nodesToCheck.splice(nodesToCheck.indexOf(start), 1);
    roads.filter(road => road.from === start).forEach(option => {
      if (!shortestPaths[option.to]) {
        nodesToCheck.push(option.to);
      }
      if ((shortestPaths[option.to] && shortestPaths[option.to].time > shortestPaths[start].time + option.drivingTime) || 
        !shortestPaths[option.to]) {
        shortestPaths[option.to] = {
          time: shortestPaths[start].time + option.drivingTime,
          path: shortestPaths[start].path.concat(option.to)
        };
      }
    });
  }
  return shortestPaths[finish] ? shortestPaths[finish].path : null;
}

var roads = [
    {from: 0, to: 1, drivingTime: 5},
    {from: 0, to: 2, drivingTime: 10},
    {from: 1, to: 2, drivingTime: 10},
    {from: 1, to: 3, drivingTime: 2},
    {from: 2, to: 3, drivingTime: 2},
    {from: 2, to: 4, drivingTime: 5},
    {from: 3, to: 2, drivingTime: 2},
    {from: 3, to: 4, drivingTime: 10}
];
console.log(navigate(5, roads, 0, 4)); 
// should return [0, 1, 3, 2, 4]. Fastest time is 5 + 2 + 2 + 5 = 14 minutes
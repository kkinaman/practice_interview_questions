/*
Given an array of meeting times of employees(object formatted as below), 
output a condensed array with all times anyone is in a meeting.

Note: The integer values for startTime and endTime are the number of 30-min intervals after 9:00AM

Example: 
  input: [
        {startTime: 0, endTime: 1},
        {startTime: 3, endTime: 5},
        {startTime: 4, endTime: 8},
        {startTime: 10, endTime: 12},
        {startTime: 9, endTime: 10}
        ]
  output: [
        {startTime: 0, endTime: 1},
        {startTime: 3, endTime: 8},
        {startTime: 9, endTime: 12}
        ]

*/

//TODO: Optimize based on interviewcake suggestions

function mergeMeetings(meetingTimes) {
  let busyTimes = {};
  meetingTimes.forEach(meeting => {
    //mark every 30 min slot if it is busy
    for (let i = meeting.startTime; i < meeting.endTime; i++) {
      busyTimes[i] = i;
    }
  });
  let times = Object.keys(busyTimes).map(Number);
  let iter = 0;
  let mergedTimes = [];
  while (iter < times.length) {
    let newMeeting = { startTime: times[iter], endTime: null};
    iter++;
    while (times[iter] - times[iter - 1] === 1) {
      iter++;
    }
    newMeeting.endTime = times[iter - 1] + 1;
    mergedTimes.push(newMeeting);
  }
  return mergedTimes;
}

var input = [
  {startTime: 0, endTime: 1},
  {startTime: 3, endTime: 5},
  {startTime: 4, endTime: 8},
  {startTime: 10, endTime: 12},
  {startTime: 9, endTime: 10}
];
console.log(mergeMeetings(input));
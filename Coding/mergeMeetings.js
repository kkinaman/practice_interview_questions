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

Constraints: can be done in O(nlogn) time
*/

//TODO: Optimize based on interviewcake suggestions -- currently some factor of n^2...

// function mergeMeetings(meetingTimes) {
//   let busyTimes = {};
//   meetingTimes.forEach(meeting => {
//     //mark every 30 min slot if it is busy
//     for (let i = meeting.startTime; i < meeting.endTime; i++) {
//       busyTimes[i] ? null : busyTimes[i] = i;
//     }
//   });
//   let times = Object.keys(busyTimes).map(Number);
//   let iter = 0;
//   let mergedTimes = [];
//   while (iter < times.length) {
//     let newMeeting = { startTime: times[iter], endTime: null};
//     iter++;
//     while (times[iter] - times[iter - 1] === 1) {
//       iter++;
//     }
//     newMeeting.endTime = times[iter - 1] + 1;
//     mergedTimes.push(newMeeting);
//   }
//   return mergedTimes;
// }

function mergeMeetings(meetings) {
  let busyTimes = [];
  //sort meetings by start time O(nlgn)
  meetings.sort((a, b) => a.startTime - b.startTime);
  //for each meeting
  meetings.forEach(meeting => {
    let included = false;
    busyTimes.forEach(busy => {
      //if this start time is before any end-times of meetings in busyTimes
      if (meeting.startTime <= busy.endTime) {
        //if this end-time is after the end-time, update the end-time to this end-time
        if (meeting.endTime > busy.endTime) {
          busy.endTime = meeting.endTime;
        }
        included = true;
      }
    });
    //otherwise, store this meeting in busyTimes
    !included ? busyTimes.push(meeting) : null;
  });
  return busyTimes;
}

var input = [
  {startTime: 0, endTime: 1},
  {startTime: 3, endTime: 5},
  {startTime: 4, endTime: 8},
  {startTime: 10, endTime: 12},
  {startTime: 9, endTime: 10}
];

input = [{startTime: 1, endTime: 2}, {startTime: 2, endTime: 3}];
input = [{startTime: 1, endTime: 5}, {startTime: 2, endTime: 3}];
input = [
    {startTime: 1, endTime: 10},
    {startTime: 2, endTime: 6},
    {startTime: 3, endTime: 5},
    {startTime: 7, endTime: 9},
];
console.log(mergeMeetings(input));
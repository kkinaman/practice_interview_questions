/*
The businesspeople among you will know that it's often not easy to find an appointment. 
In this kata we want to find such an appointment automatically. 
You will be given the calendars of our businessperson and a duration for the meeting. 
Your task is to find the earliest time, when every businessperson is free for at least that duration.

Example Schedule:

Person | Meetings
-------+-----------------------------------------------------------
     A | 09:00 - 11:30, 13:30 - 16:00, 16:00 - 17:30, 17:45 - 19:00
     B | 09:15 - 12:00, 14:00 - 16:30, 17:00 - 17:30
     C | 11:30 - 12:15, 15:00 - 16:30, 17:45 - 19:00

Rules:

All times in the calendars will be given in 24h format "hh:mm", the result must also be in that format
A meeting is represented by its start time (inclusively) and end time (exclusively) -> if a meeting takes place from 09:00 - 11:00, the next possible start time would be 11:00
The businesspeople work from 09:00 (inclusively) - 19:00 (exclusively), the appointment must start and end within that range
If the meeting does not fit into the schedules, return null or None as result
The duration of the meeting will be provided as an integer in minutes

Following these rules and looking at the example above the earliest time for a 60 minutes meeting would be 12:15.
*/

var schedules = [
  [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'], ['17:45', '19:00']],
  [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']],
  [['11:30', '12:15'], ['15:00', '16:30'], ['17:45', '19:00']]
];

getStartTime(schedules, 60); //12:15
getStartTime(schedules, 90); //null

function timeBetween(start, end) { //start and end are strings in military time format HH:MM
  let h1 = parseInt(start.split(':')[0]);
  let h2 = parseInt(end.split(':')[0]);
  let m1 = parseInt(start.split(':')[1]);
  let m2 = parseInt(end.split(':')[1]);
  return (h2 * 60 + m2) - (h1 * 60 + m1);
}

//parameters: time is a string, range is a tuple of time strings
//output: boolean
function timeIsWithinRange(time, range) { 
  let targetH = parseInt(time.split(':')[0]);
  let targetM = parseInt(time.split(':')[1]);
  let h1 = parseInt(range[0].split(':')[0]);
  let h2 = parseInt(range[1].split(':')[0]);
  let m1 = parseInt(range[0].split(':')[1]);
  let m2 = parseInt(range[1].split(':')[1]);
  return (h1 * 60 + m1 <= targetH * 60 + targetM) && (targetH * 60 + targetM <= h2 * 60 + m2);
}

//parameters: time is a string, minutes is an integer
//output: time as string
function timePlusMinutes(time, minutes) { 
  let hour = parseInt(time.split(':')[0]);
  let minute = parseInt(time.split(':')[1]) + minutes;
  if (minute >= 60) {
    hour++;
    minute -= 60;
  }
  minute = minute < 9 ? '0' + minute : minute;
  return hour + ':' + minute;
}

function getStartTime(schedules, duration) {
  console.log(schedules, duration);
  //initialize array to keep track of potential start times
  let potentialTimes = [];
  //for each person (row)
  for (let i = 0; i < schedules.length; i++) {
    let meetings = schedules[i];
    //initialize temporary array to keep track of meeting times that still work
    let tempTimes = [];
    //for each meeting
    for (let j = -1; j < meetings.length; j++) {
      let startTime = j < 0 ? '9:00' : meetings[j][1];
      let endTime = meetings[j + 1] ? meetings[j + 1][0] : '19:00';
      //if time between meetings is greater than duration
      if (timeBetween(startTime, endTime) > duration) {
        //if this is the first person
        if (i === 0) {
          //add as tuple to temp array
          tempTimes.push([startTime, endTime]);
        } else {
          //for each potential meeting time already saved
          for (let k = 0; k < potentialTimes.length; k++) {
            //if both start and end are within this potential time
            if (timeIsWithinRange(startTime, potentialTimes[k]) && timeIsWithinRange(endTime, potentialTimes[k])) {
              tempTimes.push([startTime, endTime]);
            //if start time of chunk is within this potential AND the start time of chunk plus the duration is also within this potential
            } else if (timeIsWithinRange(startTime, potentialTimes[k]) && 
              timeIsWithinRange(timePlusMinutes(startTime, duration), potentialTimes[k])) {
              //update the start time and add this to temp array
              tempTimes.push([startTime, potentialTimes[k][1]]);
            //else if the end time of chunk is within this potential AND the end time minus duraction also within potential
            } else if (timeIsWithinRange(endTime, potentialTimes[k]) &&
              timeIsWithinRange(timePlusMinutes(endTime, duration * -1), potentialTimes[k])) {
              //update the end time and add this to temp array
              tempTimes.push([potentialTimes[k][0], endTime]);
            }
          }
        }
      }
    }
    //if the temp array is empty
    if (tempTimes.length === 0) {
      //return null -- there are no possible times for all people to attend a meeting
      return null;
    } else {
      //reassign the array of potential start times to the temp array
      potentialTimes = tempTimes;
    }
  }
  //return the first value of the first tuple in the array
  return potentialTimes[0][0];
}
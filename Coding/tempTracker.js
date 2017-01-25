/*
Write a class TempTracker with these methods:

insert()—records a new temperature
getMax()—returns the highest temp we've seen so far
getMin()—returns the lowest temp we've seen so far
getMean()—returns the mean ↴ of all temps we've seen so far
getMode()—returns a mode ↴ of all temps we've seen so far
Optimize for space and time. Favor speeding up the getter functions (getMax(), getMin(), getMean(), and getMode()) over speeding up the insert() function.

Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit, so we can assume they'll all be in the range 0..1100..110.

If there is more than one mode, return any of the modes.
*/

class TempTracker {
  constructor(props) {
    this.temps = [];
  }

  insert(temp) {
    //might want to sort on push
    this.temps.push(temp);
  }

  getMax() {
    //if temps is sorted, return last
  }

  getMin() {
    //if temps is sorted, return first
  }

  getMean() {
    //reduce over temps, returning sum and dividing by length of temps
  }

  getMode() {
    //iterate over temps, saving counts to an object, and updating a highest occurrence along the way
  }
}
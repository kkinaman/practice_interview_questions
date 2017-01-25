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
    this.temps = {};
    this.lowest = Infinity;
    this.highest = -Infinity;
    this.totalForMean = 0;
    this.numberOfTemps = 0;
    this.currentMode = {value: null, occurrences: 0};
  }

  insert(temp) {
    this.temps[temp] = this.temps[temp] ? this.temps[temp] + 1 : 1;
    //update mode if necessary
    if (this.temps[temp] > this.currentMode.occurrences) {
      this.currentMode = {value: temp, occurrences: this.temps[temp]};
    }
    //if lower than lowest, update
    this.lowest = Math.min(temp, this.lowest);
    //if higher than highest, update
    this.highest = Math.max(temp, this.highest);
    this.totalForMean += temp;
    this.numberOfTemps++;
  }

  getMax() {
    return this.highest;
  }

  getMin() {
    return this.lowest;
  }

  getMean() {
    return this.totalForMean / this.numberOfTemps;
  }

  getMode() {
    return this.currentMode.value;
  }
}

var t = new TempTracker();
t.insert(100);
t.insert(70);
t.insert(62);
t.insert(104);
t.insert(100);
t.insert(51);

console.log(t.getMax());
console.log(t.getMin());
console.log(t.getMean());
console.log(t.getMode());
/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {
  if (typeof apple !== 'object' && typeof orange !== 'object') {
    if (apple === orange) {
      return true;
    } else {
      return false;
    }
  }
  var appleKeys = Object.keys(apple);
  var orangeKeys = Object.keys(orange);
  if (appleKeys.length !== orangeKeys.length) {
    return false;
  }
  for (var i = 0; i < appleKeys.length; i++) {
    var key = appleKeys[i];
    if (!deepEquals(apple[key], orange[key])) {
      return false;
    }
  }
  return true;
};

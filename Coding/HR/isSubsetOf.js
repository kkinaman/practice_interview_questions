/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * TODO: Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

Array.prototype.isSubsetOf = function (arr) {
  var objects = [];
  var arrays = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      arrays.push(arr[i]);
    } else if (typeof arr[i] === 'object') {
      objects.push(arr[i]);
    }
  }

  for (var i = 0; i < this.length; i++) {
    let found = false;
    if (Array.isArray(this[i])) {
      for (var j = 0; j < arrays.length; j++) {
        if (areArraysEqual(this[i], arrays[i])) {
          found = true;
          break;
        }
      }
      if (!found) {
        return false;
      }
    } else if (typeof this[i] === 'object') {
      //check if it's in objects
      for (var j = 0; j < objects.length; j++) {
        if (areObjectsEqual(this[i], objects[i])) {
          found = true;
          break;
        }
      }
      if (!found) {
        return false;
      }
    } else if (arr.indexOf(this[i]) === -1) {
      return false;
    }
  }
  return true;
};

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function areObjectsEqual(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  let keys = Object.keys(obj1);
  for (var i = 0; i < keys.length; i++) {
    if (obj1[keys[i]] !== obj2[keys[i]]) {
      return false;
    }
  }
  return true;
}

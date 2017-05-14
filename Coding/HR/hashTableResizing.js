/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  var resizing = false;
  
  result.insert = function(key, value) {
    var hash = getIndexBelowMaxForKey(key, storageLimit);
    storage[hash] = storage[hash] || [];
    var inserted = false;
    storage[hash].forEach(function(tuple) {
      if (tuple[0] === key) {
        tuple[1] = value;
        inserted = true;
      }
    });
    if (!inserted) {
      storage[hash].push([key,value]);
      size++;
    }
    if (size > 0.75 * storageLimit) {
      console.log(size, storageLimit);
      console.log('DOUBLING');
      result.resize(storageLimit * 2);
    }
  };

  result.retrieve = function(key) {
    var target;
    var hash = getIndexBelowMaxForKey(key, storageLimit);
    if (storage[hash]) {
      storage[hash].forEach(function(tuple) {
        if (tuple[0] === key) {
          target = tuple[1];
        }
      });
    }
    return target;
  };

  result.remove = function(key) {
    var hash = getIndexBelowMaxForKey(key, storageLimit);
    if (storage[hash]){
      var indexToRemove;
      storage[hash].forEach(function(tuple, i) {
        if (tuple[0] === key) {
          indexToRemove = i;
        }
      });
      if (indexToRemove !== undefined) {
        size--;
        storage[hash].splice(indexToRemove, 1);
      }
      if (size < 0.25 * storageLimit && size >= 2) {
        console.log(size, storageLimit);
        console.log('HALVING');
        result.resize(storageLimit / 2);
      }
    }
  };

  result.resize = function(newSize) {
    if (!resizing) {
      resizing = true;
      storageLimit = newSize;
      var buckets = storage;
      storage = [];
      size = 0;
      buckets.forEach(function(bucket) {
        if (bucket.length > 0) {
          bucket.forEach(function(tuple) {
            result.insert(tuple[0], tuple[1]);
          })
        }
      });
    }
    resizing = false;
  }

  return result;
};

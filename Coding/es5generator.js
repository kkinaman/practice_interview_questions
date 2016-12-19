/*
Generators and Iterators are new ES6 features that will allow things like this:

function* fibonacci() {
    let [prev, curr] = [0, 1];
    for (;;) {
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}
Using them in this way, we can do amazing things:

let seq = fibonacci();
print(seq.next()); // 1
print(seq.next()); // 2
print(seq.next()); // 3
print(seq.next()); // 5
print(seq.next()); // 8
This is powerful, but until a few months later, ES6 will not be born.

The goal of this kata is to implement pseudo-generators with ES5.

The first thing to do is to implement the generator function:

function generator(sequencer) {
   ...
}
generator(sequencer[, arg1, arg2, ...]) receives a sequencer function to generate the sequence 
and returns and object with a next() method. When the next() method is invoked, the next value is generated. 
The method could receive as well optional arguments to be passed to the sequencer function.

This is an example of a dummy sequencer:

function dummySeq() {
  return function() {
    return "dummy";
  };
}
To test generator(), you could use dummySeq() in this way:

var seq = generator(dummySeq);
seq.next(); // 'dummy'
seq.next(); // 'dummy'
seq.next(); // 'dummy'
....
When you're done, you should implement the following generators (I think the functions are self explanatory):

function factorialSeq() {...} // 1, 1, 2, 6, 24, ...
function fibonacciSeq() {...} // 1, 1, 2, 3, 5, 8, 13, ...
function rangeSeq(start, step) {...} // rangeSeq(1, 2)  -> 1, 3, 5, 7, ...
function primeSeq() {...} // 2, 3, 5, 7, 11, 13, ...
partialSumSeq(1, 3, 7, 2, 0) {...} // 1, 4, 11, 13, 13, end
You can use any of them in the same way:

var seq = generator(factorialSeq);
seq.next(); // !0 = 1
seq.next(); // !1 = 1
seq.next(); // !2 = 2
seq.next(); // !3 = 6
seq.next(); // !4 = 24
...
There are some sequences which are infinite and others are not. For example:

primeSeq: Is infinite
partialSumSeq: Is limited to the passed values.
When the sequence is done (in finite sequences), if you call seq.next() again, it should produce an error.
*/


function generator(sequencer) {
  var args = [].slice.call(arguments);
  if (args.length > 1) {
    args = args.slice(1);
  }
  var sequence = sequencer.apply(null, args);
  return {
    next: () => {
      return sequence();
    }
  };
}

function dummySeq() {
  return function() {
    return 'dummy';
  };
}

function factorialSeq() {
  var n = 0;
  var factSoFar = 1;
  return function() {
    var returnVal = n ? n * factSoFar : 1;
    n++;
    factSoFar = returnVal;
    return returnVal;
  };
}

function fibonacciSeq() {
  var n = 0;
  var secondLastFib = 1;
  var lastFib = 1;
  return function() {
    var returnVal = n <= 1 ? 1 : lastFib + secondLastFib;
    n++;
    secondLastFib = lastFib;
    lastFib = returnVal;
    return returnVal;
  };
}

function rangeSeq(start, step) {
  var current = start;
  return function() {
    var returnVal = current;
    current += step;
    return returnVal;
  };
}

function primeSeq() {
  var lastChecked = 1;

  function isPrime(n) {
    if (n <= 2) {
      return true;
    }
    for (var i = n - 1; i >= Math.ceil(Math.sqrt(n)); i--) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };

  return function() {
    lastChecked++;
    while (true) {
      if (isPrime(lastChecked)) {
        return lastChecked;
      }
      lastChecked++;
    }
  };
}

function partialSumSeq() {
  var args = [].slice.call(arguments);
  if (!args.length) {
    throw new Error('end of sequence');
  }
  var sumSoFar = 0;
  var index = 0;
  return function() {
    if (index >= args.length) {
      throw new Error('end of sequence');
    }
    var returnVal = sumSoFar + args[index];
    index++;
    sumSoFar = returnVal;
    return returnVal;
  };
}
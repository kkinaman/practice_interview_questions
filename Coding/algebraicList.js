function Cons(head, tail) {
  this.head = head;
  this.tail = tail;
}

Cons.fromArray = function(array) {
  if (!array.length) {
    return null;
  } else {
    return new Cons(array[0], Cons.fromArray(array.slice(1)));
  }
};

function filter(list, predicate) {
  let results = [];
  if (predicate(list.head)) {
    results.push(list.head);
  }
  return list.tail ? results.concat(filter(list.tail, predicate)) : results;
}

function map(list, mapper) {
  let results = [];
  results.push(mapper(list.head));
  return list.tail ? results.concat(map(list.tail, mapper)) : results;
}

Cons.prototype.filter = function(predicate) { return filter(this, predicate); };
Cons.prototype.map = function(mapper) { return map(this, mapper); };

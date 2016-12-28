function Cons(head, tail) {
  this.head = head;
  this.tail = tail;
}

function toArray(list) {
  if (list) {
    var more = list.tail;
    return [list.head].concat(more ? toArray(more) : []);
  }
  return [];
}

Cons.prototype.toArray = function() { return toArray(this); };



Cons.fromArray = function(array) {
  if (!array.length) {
    return null;
  } else {
    return new Cons(array[0], Cons.fromArray(array.slice(1)));
  }
};

function filter(list, predicate) {
  let newList = arguments[2] || null;
  if (predicate(list.head)) {
    newList = new Cons(list.head, newList);
  }
  return list.tail ? filter(list.tail, predicate, newList) : newList;
}

function map(list, mapper) {
  let newList = arguments[2] || null;
  newList = new Cons(mapper(list.head), newList);
  return list.tail ? map(list.tail, mapper, newList) : newList;
}

Cons.prototype.filter = function(predicate) { return filter(this, predicate); };
Cons.prototype.map = function(mapper) { return map(this, mapper); };

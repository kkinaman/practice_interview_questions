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
  return array.length ? new Cons(array[0], Cons.fromArray(array.slice(1))) : null;
};

function filter(list, predicate) {
  let newList = list.tail ? filter(list.tail, predicate) : null;
  return predicate(list.head) ? newList ? new Cons(list.head, newList) : new Cons(list.head, null) : newList;
}

function map(list, mapper) {
  return list.tail ? new Cons(mapper(list.head), map(list.tail, mapper)) : new Cons(mapper(list.head), null);
}

Cons.prototype.filter = function(predicate) { return filter(this, predicate); };
Cons.prototype.map = function(mapper) { return map(this, mapper); };

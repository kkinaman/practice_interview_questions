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
  if (list.tail) {
    return results.concat(filter(list.tail, predicate));
  } else {
    return results;
  }
}

function map(list, mapper){
  //TODO: return a new list containing all elements
  //resulting from applying the mapper functiont to them
  return null;
}

Cons.prototype.filter = function(predicate){ return filter(this,predicate); };
Cons.prototype.map = function(mapper){ return map(this, mapper); };

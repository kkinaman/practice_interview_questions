function List() {}

function EmptyList() {}
EmptyList.prototype = new List();
EmptyList.prototype.constructor = EmptyList;

EmptyList.prototype.toString = () => '()';
EmptyList.prototype.isEmpty = () => true;
EmptyList.prototype.length = () => 0;
EmptyList.prototype.push = function(x) {
  return new ListNode(x, this);
};
EmptyList.prototype.remove = function(x) { /* implement this */ };
EmptyList.prototype.append = function(xs) { /* implement this */ };

function ListNode(value, next) {
  this.value = value;
  this.next = next;
}

ListNode.prototype = new List();
ListNode.prototype.constructor = ListNode;
ListNode.prototype.isEmpty = function() {
  return !!this.value;
};

ListNode.prototype.toString = function() {
  let output = '(';
  let iter = this;
  while (!(iter instanceof EmptyList)) {
    output += iter.value + ' ';
    iter = iter.next;
  }
  output = output.trim();
  output += ')';
  return output;
};

ListNode.prototype.head = function() {
  return this.value;
};
ListNode.prototype.tail = function() {
  return this.next;
};
ListNode.prototype.length = function() {
  let iter = this;
  let counter = 0;
  while (!(iter instanceof EmptyList)) {
    counter++;
    iter = iter.next;
  }
  return counter;
};
ListNode.prototype.push = function(x) {
  return new ListNode(x, this);
};
ListNode.prototype.remove = function(x) { /* implement this */ };
ListNode.prototype.append = function(xs) { /* implement this */ };


let a = new EmptyList();
console.log(a.toString()); // ()
console.log(a.isEmpty());  // true
console.log(a.length());   // 0

var list0 = new EmptyList();        // => "()"
var list1 = list0.push(3);          // => "(3)"
var list2 = list1.push(2);          // => "(2 3)"
var list3 = list2.push(1);          // => "(1 2 3)"
console.log(list3.toString());      // '(1 2 3)'
console.log(list3.length());        // 3
console.log(list3.head());          // 1
console.log(list3.tail());    
// var list13 = list1.append(list3);   // => "(3 1 2 3)"

// list13.head();   // => 3
// list13.tail();   // => list3

console.log(list1 instanceof ListNode); // true
console.log(list0 instanceof EmptyList); // true
console.log(list1.tail() instanceof EmptyList); //true
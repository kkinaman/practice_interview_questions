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
EmptyList.prototype.remove = function(x) {
  return this;
};
EmptyList.prototype.append = function(xs) {
  return xs;
};

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
  return new ListNode(x, new ListNode(this.value, this.next));
};
ListNode.prototype.remove = function(x) {
  let newList = new EmptyList();
  let iter = this;
  let backwardList = new EmptyList();
  while (!(iter instanceof EmptyList)) {
    backwardList = new ListNode(iter.value, backwardList);
    iter = iter.next;
  }
  iter = backwardList;
  while (!(iter instanceof EmptyList)) {
    if (iter.value !== x) {
      newList = new ListNode(iter.value, newList);
    }
    iter = iter.next;
  }
  return newList;
};
ListNode.prototype.append = function(xs) {
  let iter = this;
  let backwardList = new EmptyList();
  while (!(iter instanceof EmptyList)) {
    backwardList = new ListNode(iter.value, backwardList);
    iter = iter.next;
  }
  iter = backwardList;
  let newList = xs;
  while (!(iter instanceof EmptyList)) {
    newList = new ListNode(iter.value, newList);
    iter = iter.next;
  }
  return newList;
};


var list = new EmptyList();
console.log(list.toString()); // ()
console.log(list.isEmpty());  // true
console.log(list.length());   // 0

var list0 = new EmptyList();        
var list1 = list0.push(3);          
var list2 = list1.push(2);          
var list3 = list2.push(1);
console.log(list3.remove(2));       // ListNode...3 1      
console.log(list3.length());        // 3
console.log(list3.head());          // 1
console.log(list3.tail());          // ListNode...2 3 
console.log(list1.toString());      // '(3)'
console.log(list1.tail());          // EmptyList
console.log(list3.toString());      // '(1 2 3)'
var list13 = list3.append(list1);   

console.log(list13);   // => "(3 1 2 3)"

console.log(list1 instanceof ListNode); // true
console.log(list0 instanceof EmptyList); // true
console.log(list1.tail() instanceof EmptyList); //true
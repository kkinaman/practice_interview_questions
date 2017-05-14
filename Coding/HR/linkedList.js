/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

//write methods here!

LinkedList.prototype.addToTail = function(val) {
  var node = this.makeNode(val); 
  if (this.tail) {
    this.tail.next = node;
    this.tail = node;
  } else {
    this.head = this.tail = node;
    this.head.next = this.tail;
  }
};

LinkedList.prototype.removeHead = function() {
  if (this.head) {
    var head = this.head;
    if (this.head.value === this.tail.value) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return head.value;
  } else {
    return null;
  }
};

LinkedList.prototype.contains = function(val) {
  var curNode = this.head;
  while(curNode) {
    if (curNode.value === val) {
      return true;
    }
    curNode = curNode.next;
  }
  return false;
};

LinkedList.prototype.makeNode = function(val) {
  return {
    next: null,
    value: val
  }
};

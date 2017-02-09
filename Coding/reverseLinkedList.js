/*
Reverse a linked list in place
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

ListNode.prototype.print = function() {
  let iter = this;
  while (iter) {
    console.log(iter.val);
    iter = iter.next;
  }
};

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);

a.next = b;
b.next = c;

console.log(a.print());
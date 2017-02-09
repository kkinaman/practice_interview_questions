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
var d = new ListNode(4);

a.next = b;
b.next = c;
c.next = d;

ListNode.prototype.reversed = function() {
  let cur = this;
  let leader = cur.next;
  cur.next = null;
  let chaser = leader;
  while (leader) {
    leader = chaser.next;
    chaser.next = cur;
    cur = chaser;
    chaser = leader;
  }
  return cur;
};

console.log(a.print());

console.log(a.reversed().print());
/*
Write a function kthToLastNode() that takes an integer k and the head_node of a singly linked list, 
and returns the kth to last node in the list.

*/
function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var a = new LinkedListNode('Angel Food');
var b = new LinkedListNode('Bundt');
var c = new LinkedListNode('Cheese');
var d = new LinkedListNode('Devil\'s Food');
var e = new LinkedListNode('Eccles');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

function kthToLastNode(k, head) {
  //iterate through the list
  //once we get to the kth node, start another iterator
  //when we get to the end, the second iterator will be the kth to last
  let iter = head;
  let kth;
  let counter = 0;
  while (iter) {
    counter++;
    if (counter === k) {
      kth = head;
    }
    kth = kth !== undefined && iter.next !== null ? kth.next : kth;
    iter = iter.next;
  }
  return kth.value;
}

console.log(kthToLastNode(5, a)); // d
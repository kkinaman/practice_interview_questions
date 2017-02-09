/*
Write a function kth_to_last_node() that takes an integer k and the head_node of a singly linked list, 
and returns the kth to last node in the list.

*/
function LinkedListNode(value) {
  this.value = value;
  this.next = None;
}

var a = LinkedListNode('Angel Food');
var b = LinkedListNode('Bundt');
var c = LinkedListNode('Cheese');
var d = LinkedListNode('Devil\'s Food');
var e = LinkedListNode('Eccles');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kth_to_last_node(2, a)); // d
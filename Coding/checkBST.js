/*
Write a function to check if a BST is valid
*/

function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

BinaryTreeNode.prototype.isValid = function(bound, direction) {
  //if a leaf, return true
  if (!this.left && !this.right) {
    return true;
  }
  let leftValidity = this.left ? this.left.isValid(this.value, 'upper') : true;
  let rightValidity = this.right ? this.right.isValid(this.value, 'lower') : true;
  //if this node is valid, return the validity of its left and right nodes
  if (leftChildValid(this) && rightChildValid(this) && inBound(this.left, this.right, bound, direction)) {
    return leftValidity && rightValidity;
  } else {
    return false;
  }

  function leftChildValid(node) {
    return !node.left || (node.left && node.left.value < node.value);
  }

  function rightChildValid(node) {
    return !node.right || (node.right && node.right.value > node.value);
  }

  function inBound(left, right, bound, direction) {
    return !bound || (direction === 'upper' && (!left || left.value < bound) && (!right || right.value < bound)) ||
      (direction === 'lower' && (!left || left.value > bound) && (!right || right.value > bound));
  }
};

var BST = new BinaryTreeNode(4);
var node2 = BST.insertLeft(2);
var node6 = BST.insertRight(6);
var node1 = node2.insertLeft(1);
var node3 = node2.insertRight(5); //change for validity; 3 valid, 5 not valid
var node5 = node6.insertLeft(5);
var node7 = node6.insertRight(7);
var node8 = node7.insertRight(8);
console.log(BST.isValid());
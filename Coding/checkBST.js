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

BinaryTreeNode.prototype.isValid = function(upperBound, lowerBound) {
  upperBound = upperBound || Infinity;
  lowerBound = lowerBound || -Infinity;
  let leftValidity = this.left ? this.left.isValid(Math.min(upperBound, this.value), lowerBound) : true;
  let rightValidity = this.right ? this.right.isValid(upperBound, Math.max(lowerBound, this.value)) : true;
  //if this node is valid, return the validity of its left and right nodes
  if (leftChildValid(this, upperBound, lowerBound) && rightChildValid(this, upperBound, lowerBound)) {
    return leftValidity && rightValidity;
  } else {
    return false;
  }

  function leftChildValid(node, upperBound, lowerBound) {
    return !node.left || (node.left && node.left.value < node.value && node.left.value > lowerBound && node.left.value < upperBound);
  }

  function rightChildValid(node, upperBound, lowerBound) {
    return !node.right || (node.right && node.right.value > node.value && node.right.value > lowerBound && node.right.value < upperBound);
  }
};

var BST = new BinaryTreeNode(4);
var node2 = BST.insertLeft(2);
var node6 = BST.insertRight(6);
var node1 = node2.insertLeft(1);
var node3 = node2.insertRight(3); //change for validity; 3 valid, 5 not valid
var node5 = node6.insertLeft(5);
var node7 = node6.insertRight(7);
var node8 = node7.insertRight(8);
console.log(BST.isValid());
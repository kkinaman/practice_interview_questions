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

BinaryTreeNode.prototype.isValid = function() {
  //if a leaf, return true
  if (!this.left && !this.right) {
    return true;
  }
  let leftValidity = this.left ? this.left.isValid() : true;
  let rightValidity = this.right ? this.right.isValid() : true;
  //if this node is valid, return the validity of its left and right nodes
  if ((!this.left || (this.left && this.left.value < this.value)) &&
    (!this.right || (this.right && this.right.value > this.value))) {
    return leftValidity && rightValidity;
  } else {
    return false;
  }
};

var BST = new BinaryTreeNode(4);
var node2 = BST.insertLeft(7);
var node6 = BST.insertRight(6);
// var node1 = node2.insertLeft(1);
// var node3 = node2.insertRight(3);
var node5 = node6.insertLeft(5);
var node7 = node6.insertRight(7);
var node8 = node7.insertRight(8);
console.log(BST.isValid());
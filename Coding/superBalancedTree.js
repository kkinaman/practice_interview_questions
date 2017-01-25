/*
Write a function to check if a BST is superbalanced, meaning no two nodes' depths are more than 1 different
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

BinaryTreeNode.prototype.isSuperBalanced = function() {
  let minDepth = Infinity;
  let maxDepth = 0;
  //traverse the tree and at each leaf update min and max depths
  findDepth(this, 0);
  //if at the end the max depth is greater than 1 more than the min depth, not superbalanced
  console.log(minDepth, maxDepth);
  return maxDepth - minDepth <= 1;

  function findDepth(node, depth) {
    if (node.left !== null) {
      findDepth(node.left, depth + 1);
    }
    if (node.right !== null) {
      findDepth(node.right, depth + 1);
    }
    if (node.left === null && node.right === null) {
      minDepth = Math.min(depth, minDepth);
      maxDepth = Math.max(depth, maxDepth);
      return;
    }
  }
};

var BST = new BinaryTreeNode(4);
var node2 = BST.insertLeft(2);
var node6 = BST.insertRight(6);
// var node1 = node2.insertLeft(1);
// var node3 = node2.insertRight(3);
var node5 = node6.insertLeft(5);
var node7 = node6.insertRight(7);
var node8 = node7.insertRight(8);
console.log(BST.isSuperBalanced());
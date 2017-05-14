/**
 * Write a stack using your preferred instantiation pattern. 
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
  this.storage = [];

  // add an item to the top of the stack
  this.push = function(item) {
    var index = this.size();
    while (index > 0) {
      this.storage[index] = this.storage[index - 1];
      index--;
    }
    this.storage[0] = item;
  };

  // remove an item from the top of the stack
  this.pop = function() {
    var result = this.storage[0];
    var index = 1;
    while (this.storage[index]) {
      this.storage[index - 1] = this.storage[index];
      index++;
    }
    this.storage[index - 1] = null;
    return result;
  };

  // return the number of items in the stack
  this.size = function() {
    var index = 0;
    while (this.storage[index]) {
      index++;
    }
    return index;
  };
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function(item) {
    inbox.push(item);
  };

  // called to remove an item from the `queue`
  this.dequeue = function() {
    if (outbox.size() === 0) {
      while (inbox.size() > 0) {
        outbox.push(inbox.pop());
      }
    }
    return outbox.pop();
  };

  // should return the number of items in the queue
  this.size = function() {
    return inbox.size() + outbox.size();
  };
};

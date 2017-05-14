/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

// var bind = function(func, context) {
//   var origArgs = [].slice.call(arguments, 2);
//   return function() {
//     return func.apply(context, origArgs.concat([].slice.call(arguments)));
//   };
// };

var bind = (func, context, ...rest) => { (...args)  => func.apply(context, [...rest, ...args]);

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

Function.prototype.bind = (context, ...rest) => {
  var func = this;
  return (...args) => func.apply(context, [...rest, ...args]);
};

// Function.prototype.bind = function(context) {
//   var origArgs = [].slice.call(arguments, 1);
//   var func = this;
//   return function () {
//     return func.apply(context, origArgs.concat([].slice.call(arguments)));
//   }
// };

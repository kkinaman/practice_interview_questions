### Explain event delegation

Event delegation in JS is the ability to add a single event handler to a parent node which will catch when the specified event occurs on any of its child elements. If statements in the handler can check that the element is the correct type you are looking for, and a while loop can help you bubble up the elements if they are nested.

E.g.
```javascript
document.getElementById(‘parent’).onclick(event) {
  if (event.target && event.target.nodeName === ‘LI’) {
    //do something here
  } else {
    target = event.target.parentNode
      while (target !== this) {
        if (target.nodeName === ‘LI’) {
          //do something here
        }
      }
  }
}
```

Notes: onclick() === click() in jquery

To check if an element has a class, do element.matches(‘.classnamehere’), can also handle span.class, div#id, etc. ===> same as hasClass or .id in jquery

## Explain how prototypal inheritance works

In JS, there are only objects, not classes, and each object simply has a collection of properties. One of these properties is its prototype, accessed by .__proto__. If a property of an object cannot be found in this object directly, whatever is specified as its prototype is then searched for the property, and this continues up the prototype chain until it is found, or the end is reached (where prototype is null).
To implement inheritance in JS, it must be specified that one object’s prototype is that of another object. In ES5, this would be done like:
var Car = function() {
  This.wheels = 4
}
Car.prototype.drive = function() {}
var Van = function() {
  Car.call(this)
}
Van.prototype = Object.create(Car.prototype)
Van.prototype.constructor = Car
→ Now if we called var v = new Van(); v.wheels, we would get 4

In ES6, keywords were introduced to make JS appear more class-like, it could be done like this:
class Car {
  constructor(height) {
    This.height = height
    This.wheels = 4
  }
}
class Van extends Car {
  constructor(height) {
    super(height)
  }
}
→ Again, if we called var v = new Van(); v.wheels, we would get 4 (ignoring the height parameter)

What do you think of AMD vs CommonJS?
AMD = asynchronous module definition -- modules are loaded specifically for a function, this way multiple modules may be loading at the same time → faster load time 
CommonJS (e.g. Node.js) -- modules can be loaded anywhere in a file, but it happens synchronously

Function declaration vs function expression
Function declaration uses the function keyword. These functions are hoisted to the top for parsing and are then accessible at any time in the code. These functions require a name or a syntax error will be thrown
Function expression, e.g. var func = function(), are parsed in place, therefore any function calls must be made after this expression or an error will be thrown.
Note: var keywords are also hoisted (declaration or expression)

Explain why the following doesn't work as an IIFE: function foo(){ }();.
Note: The reason for IIFE (immediately invoked function expression) is that functions are a way to privatize variables in JS (declared in a function, their scope only exists inside that function’s execution context, declared outside a function they are released into the global scope). IIFE helps keep the global scope clean because any variables defined in the IIFE are forgotten once the function is done executing.
The above does not work becuase function foo(){} is considered a whole statement because it is a complete function declaration, and then the next () is considered another statement, which is invalid and would throw a syntax error. To fix this, surround the first declaration in parens, to tell the parser that this will be an expression, and remove the name, i.e. (function(){})(), or (function(){}())

Initialization, instantiation, declaration
var v, function foo is the declaration. This tells the parser that this variable (or function) will exist. If the statement ends there, it is initialized as undefined. (Instantiation allocates memory for a variable/function, this happens during declaration) Initialization is when the variable/function is assigned some kind of value

What's the difference between a variable that is: null, undefined or undeclared?
E.g. newVariable → this is undeclared, neither var nor function keywords are declared. This will not work in strict mode. Undeclared variables are automatically assigned to the global context
E.g. var newVar → this is declared, but if the statement ends here, it will be initialized as undefined. This means that no value has been assigned to the variable
E.g. var emptyVar = null → this is declared to have a value null. Null is an object, making it different than undefined. This variable does have a value.

To test for these states, use ===. Null and undefined are both falsey, so !a for a var a that is either null or undefined will evaluate as true. Undefined is also a type (null is an object) so you could say typeof a === ‘undefined’

What is a closure, and how/why would you use one?
A closure is a function which retains the scope that it was created in. In this way, any variables declared in the same scope as the closure are still available inside the closure function. These variables are called closure variables. This is useful for functions that may be called at a later time than when they are declared. Practical examples:
- function factories which use a generic function outline and a parameter to make a more specific function, e.g. adder, sizer
- emulating private variables, e.g. initialize a variable to an IIFE that returns an object which manipulates internal ‘private’ variables. Called the module pattern (see link)

What's a typical use case for anonymous functions?
Anonymous functions are most commonly used as arguments to other functions, e.g setTimeouts, callbacks. Also used for IIFE

How do you organize your code? (module pattern, classical inheritance?)

What's the difference between host objects and native objects?
Native objects are those types that Javascript itself provides. These include String, Number, Date, Boolean, Object, Array, Function, Error, etc.
Host objects depend on the environment in which JS is running. Often this includes window (not in Node.js)

Difference between: function Person(){}, var person = Person(), and var person = new Person()?
Function Person(){} is function declaration, this will be hoisted to the top for parsing
Var person = Person() is function invocation/variable initialization...the results of the Person function will be assigned to person
Var person = new Person() assigns an instance of the Person object to person. The new keyword denotes that Object.create will be called, returning a new object of that type

What's the difference between .call and .apply, also Function.prototype.bind?
.call takes in arguments as separate parameters, i.e. func.call(this, 1, a, true), while .apply takes in an array of arguments, i.e. func.call(this, [1, a, true]). Both are invoked immediately and allow you to pass on a context variable to be this.

.bind also allows you to pass on a this variable and other arguments, but the new ‘borrowed’ function is not called right away. It also allows for currying which is when some arguments of a function are set at one time, and then the rest are set at another, often time of invocation.

Note: great resource here

When would you use document.write()?
document.write() is the fastest way to add HTML, usually scripts, to the document. However, it can cause problems if loading the script is slow. Also, whatever HTML you input doesn’t have to be valid, which can cause unexpected behavior, so best to use DOM methods, e.g. innerHTML()
Often used for adding ads or counters…
<script>
  var url = 'http://ads.com/buyme?rand='+Math.random()
  document.write('<script src="'+url+'"></scr'+'ipt>')
</script>


What's the difference between feature detection, feature inference, and using the UA string?
These practices are used to help detect what methods are available depending on the browser one is in. Feature detection is blatantly testing if (typeof Text === ‘function’) to check if a certain method is supported. Feature inferences is using feature detection to then infer which browser it is and therefore infer which other methods are available (this can easily fail). The UA string (user agent) is a string that gives you information about the current browser. You could parse this to figure out which browser you’re in, but it’s not suggested. TL;DR, use feature detection to check if certain methods are available.

Explain Ajax in as much detail as possible.
Ajax = asynchronous javascript and xml. Ajax allows for dynamic, responsive behavior that interacts with the server without having to refresh the page. Ajax is a combination of listening for events in the document/DOM and sending/receiving/handling xmlhttprequests. The basic flow is 1) some event fires in the DOM, 2) the handler sets up an XmlHttpRequest object and makes a request to the server, 3) the server handles the request and sends back some new information, 4) the XmlHttpRequest handles the response by altering something on the DOM. Ta da, no refresh! Often used with jquery. 
Resource here

What are the advantages and disadvantages of using Ajax?
Advantages: quicker responsiveness without having to refresh the page, can be more compact/modular for repeated actions across pages
Disadvantages: the url does not change with an ajax request (except maybe the hash query), so hitting back/refresh buttons do not actually ‘undo’ these requests--they just bring you back to the initial state or previous webpage...can be undesirable, but also worked around
If javascript is disabled in someone’s browser, ajax functionality will not work

Explain how JSONP works (and how it's not really Ajax).
JSONP is a method to avoid the same-origin policy, saying that source A can only access data from source B if they have the same origin (protocol, host, and port). JSONP means JSON with padding, padding being a callback function that is called on the resultant JSON data that was requested
E.g. <script src="http://cool-stuff.com/api.json?callback=myCallbackFunction"></script> where myCallbackFunction takes in json as a parameter

Have you ever used JavaScript templating? If so, what libraries have you used?
Yes. Note: This is when the HTML for a specific component is written separately from where it is rendered, with information that is provided when it is rendered, denoted by {{variable}}.
We used EJS in shortly express...

Describe event bubbling.
Note: capturing = traveling down the dom; bubbling = traveling up the dom
Event bubbling means that when an event is triggered for which a parent element is listening for, the event will bubble up the DOM tree until the parent (which is handling the event) is reached

What's the difference between an "attribute" and a "property"?
Properties are like instance variables for a DOM element, e.g. id, name, class, href. They can be booleans, strings, etc, and can be altered through .prop() method.
Attributes are only ever strings and remain the default value always, e.g.
<input type="checkbox" checked=true/>

$('input').prop('checked'); // returns true
$('input').attr('checked'); // returns "checked"

<input type="text" name="username" value="user123">

$('input').prop('value', '456user');
$('input').prop('value'); // returns "456user"
$('input').attr('value'); // returns "user123"
But you can also set custom attributes.

Why is extending built-in JavaScript objects not a good idea?
In general this is not a good idea because 1) if the function you write is ever made a native function of that object, your function will be overwritten and 2) if you overwrite an existing function, this behavior will probably not be immediately noticed by future developers (could cause confusion)
 
Difference between document load event and document DOMContentLoaded event?
DOMContentLoaded is triggered once the content is loaded and parsed, but stylesheets, images, etc may not be finished loading. A document load event triggers when the page is fully loaded.

What is the difference between == and ===?
== only checks for identical values, whereas === also requires identical types
E.g. 2 == ‘2’ → true, but 2 === ‘2’ → false

Explain the same-origin policy with regards to JavaScript.
Same-origin policy states that any source A cannot access data from source B unless they share the same origin (protocol, host, port).
Workarounds include JSONP, iFrames, and CORS headers to allow cross origin requests

Make this work:
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
We need to extend the Array library, so
Array.prototype.duplicate = function() {
  return this.concat(this);
}

Why is it called a Ternary expression, what does the word "Ternary" indicate?
Ternary originates from the n-ary sequence, i.e. unary, binary, … So ternary means it takes three parameters.
If this (1) do this (2) otherwise do this (3)

What is "use strict";? what are the advantages and disadvantages to using it?
In this mode, javascript throws more exceptions for coding mistakes, errors/warnings for improper usage (e.g. accessing the global object). Disadvantage is that you just can’t do some things (but these are generally not recommended things...so not so much of a disadvantage…)

Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5
for (var i = 0; i <= 100; i++) {
  let output = ‘’;
  If (i % 3 === 0) output.concat(‘fizz’);
  If (i % 5 === 0) output.concat(‘buzz’);
  If (output === ‘’) output.concat(i);
  Return output;
}

Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?
Many reasons:
It is confusing for future developers who are looking for where a variable is first declared (with var)...and it never is
It is easy to forget where else you are altering this variable and keeping track of when/what it is may be difficult
It’s cleaner to just define a variable where it is specifically needed
Easier to clash names when variables are just floating around

Why would you use something like the load event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?

Explain what a single page app is and how to make one SEO-friendly.
What is the extent of your experience with Promises and/or their polyfills?
What are the pros and cons of using Promises instead of callbacks?
What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
What tools and techniques do you use debugging JavaScript code?
What language constructions do you use for iterating over object properties and array items?
Explain the difference between mutable and immutable objects.
What is an example of an immutable object in JavaScript?
What are the pros and cons of immutability?
How can you achieve immutability in your own code?
Explain the difference between synchronous and asynchronous functions.
What is event loop?
What is the difference between call stack and task queue?
Explain the differences on the usage of foo between function foo() {} and var foo = function() {}


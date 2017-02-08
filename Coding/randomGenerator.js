/*
You have a function rand7() that generates a random integer from 1 to 7. 
Use it to write a function rand5() that generates a random integer from 1 to 5.
*/

function rand7() {
  return Math.ceil(Math.random() * 7);
}

function rand5() {
  return Math.ceil((rand7() * 5) / 7);
}

for (var i = 0; i < 10; i ++) {
  console.log(rand5());
}
//write a function that checks if a given string is a valid routing number

function isValid(str) {
  if (str.length !== 9) {
    return false;
  }
  let num = str.split('').map(digit => parseInt(digit));
  return (3 * (num[0] + num[3] + num[6]) + 7 * (num[1] + num[4] + num[7]) + (num[2] + num[5] + num[8])) % 10 === 0;
}

console.log(isValid('011400071'));
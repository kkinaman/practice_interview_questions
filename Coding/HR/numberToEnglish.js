/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function () {
  var number = this;
  var decimalNum;

  if (number.toString().indexOf('.') !== -1) {
    number = number.split('.')[0];
    decimalNum = number.split('.')[1];
  }

  //ZERO
  if (parseInt(number) === 0) return numbersToWords[parseInt(number)];

  //ONES AND TENS PLACE
  var curVal;
  var numberString = '';
  curVal = number % 100;
  number -= curVal;
  if (curVal > 0) {
    if (curVal < 20) {
      numberString = numbersToWords[curVal] + numberString;
    }
    else {
      var onesDigit = curVal % 10;
      if (onesDigit > 0) {
        numberString = numbersToWords[onesDigit] + numberString;
      }
      curVal -= onesDigit;
      if (curVal > 0) {
        if (onesDigit) {
          numberString = numbersToWords[curVal] + '-' + numberString;
        } else {
          numberString = numbersToWords[curVal] + ' ' + numberString;
        }
      }
    }
  }

  //HUNDREDS PLACE
  curVal = number % 1000;
  number -= curVal;
  if (curVal > 0) {
    var chunkDigits = curVal / 100;
    numberString = chunkDigits.toEnglish() + ' ' + numbersToPlace[100] + ' ' + numberString;
  }

  //OVER HUNDREDS PLACE
  var divisor = 1000, mod;

  while (number  > 0) {
    mod = divisor * 1000;
    curVal = number % mod;
    number -= curVal;
    if (curVal > 0) {
      var chunkDigits = curVal / divisor;
      numberString = chunkDigits.toEnglish() + ' ' + numbersToPlace[divisor] + ' ' + numberString;
    }
    divisor *= 1000;
  }

  return numberString.trim();
};


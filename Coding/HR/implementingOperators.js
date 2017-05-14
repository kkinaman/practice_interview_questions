// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.

function insertDecimal(numberString, numPlaces) {
  if (numPlaces > 0) {
    while (numberString.length < numPlaces) {
      numberString = '0' + numberString;
    }
    var decimalBefore = numberString.length - numPlaces;
    numberString = numberString.substring(0, decimalBefore) + '.' + numberString.substring(decimalBefore);
  }
  return numberString;
};


var multiply = function(x, y) {
  var product = 0;
  var decimalPlaces = 0;
  var negativeProduct = x < 0 !== y < 0;
  x = Math.abs(removeDecimal(x));
  y = Math.abs(removeDecimal(y));

  function removeDecimal(n) {
    if (n.toString().indexOf('.') !== -1) {
      var decimalSplit = n.toString().split('.');
      decimalPlaces += decimalSplit[1].length;
      n = parseInt(decimalSplit.join(''));
    }
    return n;
  };

  for (var i = 0; i < y; i++) {
    product += x;
  }

  var prodString = insertDecimal(product.toString(), decimalPlaces);
  
  prodString = negativeProduct ? '-' + prodString : prodString;

  return parseFloat(prodString);
};

var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x === 0) {
    return 0;
  }

  var quotientString = '';
  var decimalPlaces = 0;
  var negativeProduct = x < 0 !== y < 0;
  x = Math.abs(x);
  y = Math.abs(y);

  while (x > 0 && decimalPlaces < 3) {
    var placeCount = 0;
    if (x < y) {
      x = parseInt(x.toString() + '0');
      decimalPlaces++;
    }
    while (x >= y) {
      placeCount++;
      x -= y;
    }
    quotientString += placeCount.toString();
  }

  quotientString = insertDecimal(quotientString, decimalPlaces);

  quotientString = negativeProduct ? '-' + quotientString : quotientString;

  return parseFloat(quotientString);
}


var modulo = function(x, y) {
  if (y === 0) {
    return x;
  }
  if (x === 0) {
    return 0;
  }
  var posx = Math.abs(x);
  var posy = Math.abs(y);
  while (posx - posy >= 0) {
    posx -= posy;
  }
  return posx;
};



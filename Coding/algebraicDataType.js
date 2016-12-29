function zero() {}

function succ(nat) {
  return function() {
    return nat;
  };
}


function natToInt(nat) {
  if (nat === zero) {
    return 0;
  } else {
    let counter = -1; //because zero is also a function
    while (typeof nat === 'function') {
      counter++;
      nat = nat();
    }
    return counter;
  }
}

function intToNat(int) {
  if (int === 0) {
    return zero;
  } else {
    let result = zero;
    while (int >= 1) {
      result = succ(result);
      int--;
    }
    return result;
  }
}

function add(nat1, nat2) {
  if (nat1 === zero || nat2 === zero) {
    return nat1 === zero ? nat2 : nat1;
  } else {
    while (typeof nat1 === 'function' && nat1 !== zero) {
      nat1 = nat1();
      nat2 = succ(nat2);
    }
    return nat2;
  }
}

/*
mul(zero, zero) should be zero - Expected: [Function: zero], instead got: undefined
✘ natToInt(mul(zero, succ(zero))) should be 0 - Expected: 0, instead got: -1
✘ natToInt(mul(succ(zero), zero)) should be 0 - Expected: 0, instead got: -1
✘ natToInt(mul(succ(zero), succ(zero))) should be 1 - Expected: 1, instead got: -1
✘ natToInt(mul(succ(succ(zero)), succ(zero))) should be 2 - Expected: 2, instead got: -1
*/

function mul(nat1, nat2) {
  if (nat1 === zero || nat2 === zero) {
    return zero;
  } else {
    let product = zero;
    while (typeof nat1 === 'function' && nat1 !== zero) {
      product = add(nat2, product);
      nat1 = nat1();
    }
    return product;
  }
}

function compareTo (nat1, nat2) {
}

function toString(nat) {
  if (nat === zero) {
    return 'zero';
  } else if (typeof nat === 'function') {
    return 'succ(' + toString(nat()) + ')';
  }
}




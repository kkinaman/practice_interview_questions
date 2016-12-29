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

/*
add(zero, zero) should be zero - Expected: [Function: zero], instead got: undefined
✘ natToInt(add(zero, succ(zero))) should be 1 - Expected: 1, instead got: -1
✘ natToInt(add(succ(zero), zero)) should be 1 - Expected: 1, instead got: -1
✘ natToInt(add(succ(zero), succ(zero))) should be 2 - Expected: 2, instead got: -1
✘ natToInt(add(intToNat(100007), intToNat(50007))) should be 1500014 - Expected: 15014, instead got: -1
*/

function add(nat1, nat2) {
  if (nat1 === zero) {
    if (nat2 === zero) {
      return zero;
    } else {
      return nat2;
    }
  } else if (nat2 === zero) {
    return nat1;
  } else {
    while (typeof nat1 === 'function' && nat1 !== zero) {
      nat1 = nat1();
      nat2 = succ(nat2);
    }
    return nat2;
  }
}

function mul(nat1, nat2) {
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




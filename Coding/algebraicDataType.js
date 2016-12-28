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
}

function mul(nat1, nat2) {
}

function compareTo (nat1, nat2) {
}

/*
toString(zero) should be "zero" - Expected: 'zero', instead got: undefined
✘ toString(succ(zero)) should be "succ(zero)" - Expected: 'succ(zero)', instead got: undefined
✘ toString(succ(succ(zero))) should be "succ(succ(zero))" - Expected: 'succ(succ(zero))', instead got: undefined
✘ Expected: 'succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(succ(zero))))))))))))))))))))))))))))))))))))))))))))))))))', instead got: undefined
*/

function toString(nat) {
  if (nat === zero) {
    return 'zero';
  } else if (typeof nat === 'function') {
    return 'succ(' + toString(nat()) + ')';
  }
}




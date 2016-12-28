function zero() {}

function succ(nat) {
  return function() {
    return nat;
  };
}


/*
natToInt(zero) should be 0 - Expected: 0, instead got: undefined
✘ natToInt(succ(zero)) should be 1 - Expected: 1, instead got: undefined
✘ natToInt(succ(succ(zero))) should be 2 - Expected: 2, instead got: undefined
*/

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
}

function add(nat1, nat2) {
}

function mul(nat1, nat2) {
}

function compareTo (nat1, nat2) {
}

function toString(nat) {

}
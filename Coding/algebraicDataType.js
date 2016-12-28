function zero() {}

function succ(nat) {
  return function() {
    return nat;
  };
}


/*
intToNat(0) should be zero - Expected: [Function: zero], instead got: undefined
✘ natToInt(intToNat(50)) should be 50 - Expected: 50, instead got: -1
✘ natToInt(intToNat(140)) should be 140 - Expected: 140, instead got: -1
✘ natToInt(intToNat(177)) should be 177 - Expected: 177, instead got: -1
✘ natToInt(intToNat(190)) should be 190 - Expected: 190, instead got: -1
✘ natToInt(intToNat(151)) should be 151 - Expected: 151, instead got: -1
✘ natToInt(intToNat(136)) should be 136 - Expected: 136, instead got: -1
✘ natToInt(intToNat(139)) should be 139 - Expected: 139, instead got: -1
✘ natToInt(intToNat(108)) should be 108 - Expected: 108, instead got: -1
✘ natToInt(intToNat(103)) should be 103 - Expected: 103, instead got: -1
✘ natToInt(intToNat(151)) should be 151 - Expected: 151, instead got: -1
✘ natToInt(intToNat(187)) should be 187 - Expected: 187, instead got: -1
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

function toString(nat) {

}
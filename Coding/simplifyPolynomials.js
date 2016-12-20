/*
When we attended middle school were asked to simplify mathematical expressions like '3x-yx+2xy-x' (or usually bigger), 
and that was easy-peasy ('2x+xy"). But tell that to your pc and we'll see! 

Write a function:

simplify(poly)
that takes a string in input, representing a multilinear non-constant polynomial in integers coefficients (like "3x-zx+2xy-x"), 
and returns another string as output where the same expression has been simplified in the following way 
( -> means application of simplify):

All possible sums and subtraction of equivalent monomials ("xy==yx") has been done, e.g.:
"cb+cba" -> "bc+abc", "2xy-yx" -> "xy", "-a+5ab+3a-c-2a" -> "-c+5ab" 

All monomials appears in order of increasing number of variables, e.g.:
"-abc+3a+2ac" -> "3a+2ac-abc", "xyz-xz" -> "-xz+xyz" 

If two monomials have the same number of variables, they appears in lexicographic order, e.g.:
"a+ca-ab" -> "a-ab+ac", "xzy+zby" ->"byz+xyz" 

There is no leading + sign if the first coefficient is positive, e.g.:
"-y+x" -> "x-y", but no restrictions for -: "y-x" ->"-x+y" 

N.B. to keep it simplest, the string in input is restricted to represent only multilinear non-constant polynomials, 
so you won't find something like `-3+yx^2'. Multilinear means in this context: of degree 1 on each variable.

Warning: the string in input can contain arbitrary variables represented by lowercase characters in the english alphabet.
*/

function simplify(poly) {
  let termsTracker = {};

  //split by + first
  let terms = poly.split('+');

  //for each of those terms, split by any -, cut those parts from the initial term, and save new terms with - signs
  let negTermsToAdd = [];
  for (var i = 0; i < terms.length; i++) {
    let negTerms = terms[i].split('-');
    terms[i] = negTerms.splice(0, 1)[0]; //the first is either a positive term or an empty string
    if (negTerms.length > 0) {
      for (var j = 0; j < negTerms.length; j++) {
        if (negTerms[j][0] !== '0') { //only add - signs to non-0 coef terms
          negTerms[j] = isNaN(parseInt(negTerms[j])) ? '-1'.concat(negTerms[j]) : '-'.concat(negTerms[j]);
        }
      }
    }
    negTermsToAdd = negTermsToAdd.concat(negTerms);
  }
  terms = terms.concat(negTermsToAdd);

  //keep track of how many of each variable there are in termsTracker
  terms.forEach(term => {
    if (term !== '' && term[0] !== '0') {
      let coef = isNaN(parseInt(term)) ? 1 : parseInt(term);
      let variable = term.replace(coef, '');
      variable = variable.split('').sort().join(''); //sort chars in variable names alphabetically
      if (termsTracker[variable]) {
        termsTracker[variable] += coef;
      } else {
        termsTracker[variable] = coef;
      }
    }
  });

  //sort the variables by length, and then alphabetically
  let sortedVars = Object.keys(termsTracker).sort((a, b) => {
    if (a.length < b.length) {
      return -1;
    } else if (a.length > b.length) {
      return 1;
    } else {
      return a < b ? -1 : 1;
    }
  });

  //build out the polynomial expression as a string
  let output = '';
  sortedVars.forEach(term => {
    let posOrNeg = termsTracker[term] < 0 ? '-' : '+';
    let coef = Math.abs(termsTracker[term]) === 1 ? '' : Math.abs(termsTracker[term]);
    if (coef !== 0) {
      output = output.concat(posOrNeg, coef, term); 
    }
  });

  //slice off any leading + and return output
  return output[0] === '+' ? output.slice(1) : output;
}


console.log(simplify('dc+dcba')); //'cd+abcd')
console.log(simplify('2xy-yx')); //'xy')
console.log(simplify('-a+5ab+3a-c-2a')); //'-c+5ab')
console.log(simplify('a+ca-ab')); //'a-ab+ac')
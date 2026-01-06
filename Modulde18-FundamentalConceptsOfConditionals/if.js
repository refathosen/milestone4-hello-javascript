/**
 * IF / ELSE STATEMENTS
 *
 * - if (condition) { ... }        : run block when condition is truthy
 * - else { ... }                  : run when previous if/else-if conditions are falsy
 * - else if (condition) { ... }   : test additional conditions
 * - condition ? a : b             : ternary operator (shorthand if/else)
 *
 * Notes:
 * - Conditions are evaluated using JavaScript truthiness (e.g., 0, '', null, undefined, NaN are falsy).
 * - Prefer clear, simple conditions; extract complex checks to well-named variables.
 */

// Examples (runnable):
let score = 75;
if (score >= 80) {
  console.log('Grade: A');
} else if (score >= 70) {
  console.log('Grade: B');
} else if (score >= 60) {
  console.log('Grade: C');
} else {
  console.log('Grade: F');
}

// Ternary operator (shorthand): structure -> condition ? valueIfTrue : valueIfFalse
console.log('Result ->', score >= 70 ? 'Pass' : 'Fail');

// Truthy/falsy example:
let name = '';
if (name) {
  console.log('Name provided:', name);
} else {
  console.log('No name provided');
}

// Combined conditions and nested if:
let age = 20;
let hasID = true;
if (age >= 18) {
  if (hasID) {
    console.log('Allowed entry');
  } else {
    console.log('Show ID to enter');
  }
} else {
  console.log('Too young to enter');
}



//example practice

if(5<10){
  console.log("condition is true");
}

let biriyaniPrice = 250;

if (biriyaniPrice < 200){
  console.log("I will eat biriyani");
}
else{
  console.log("I will eat burger");
}
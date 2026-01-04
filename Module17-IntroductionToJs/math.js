// Math notes for JavaScript learners
// --------------------------------------------------
// Quick reference + small examples you can run in the console

// 1) Basic arithmetic
// +  -  *  /  % (remainder)  ** (exponent)
let a = 7;
let b = 2;
// a + b === 9
// a - b === 5
// a * b === 14
// a / b === 3.5
// a % b === 1
// a ** b === 49

// 2) Unary plus and conversions
let s = "42";
let n = +s; // converts string to number -> 42
let n2 = Number(s); // also converts -> 42
let intVal = parseInt("12.7") // 12
let floatVal = parseFloat("12.7") // 12.7

// 3) Math object - common utilities
Math.PI // 3.14159...
Math.abs(-5) // 5
Math.round(4.5) // 5
Math.floor(4.9) // 4
Math.ceil(4.1) // 5
Math.trunc(4.9) // 4  (removes fractional part)
Math.sign(-10) // -1 (sign of number)
Math.sqrt(16) // 4
Math.pow(2, 3) // 8  => same as 2 ** 3
Math.max(3, 7, 1) // 7
Math.min(3, 7, 1) // 1

// 4) Random numbers
// Math.random() returns a floating point in [0, 1)
// Example: random integer in [min, max] inclusive
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// randomInt(1, 6) -> like a dice roll

// 5) Rounding to fixed decimals (strings)
let pi = Math.PI; // 3.141592653589793
pi.toFixed(2) // "3.14" (note: returns string)
Number(pi.toFixed(2)) // 3.14  (convert back to number if needed)

// 6) Floating point precision
// Beware: floating point math is not exact
0.1 + 0.2 === 0.3 // false
// Correct comparison using an epsilon
const approxEqual = (x, y, eps = Number.EPSILON) => Math.abs(x - y) < eps;
approxEqual(0.1 + 0.2, 0.3, 1e-12) // true

// 7) BigInt (for integers beyond Number.MAX_SAFE_INTEGER)
const big = 9007199254740991n; // add `n` suffix
// Note: BigInt cannot be mixed directly with Number
// big + 1 // TypeError if 1 is a Number
big + 1n // works

// 8) Useful checks
Number.isNaN(NaN) // true
Number.isFinite(Infinity) // false
Number.isInteger(3.0) // true

// 9) Common patterns
// Clamp a number to a range
const clamp = (x, min, max) => Math.min(Math.max(x, min), max);
// Example: clamp(10, 0, 5) -> 5

// 10) Operator precedence tips
// Multiplication/division happen before addition/subtraction
// Use parentheses to make intent explicit: (a + b) * c

// Short examples to try in console:
// console.log(randomInt(1, 10));
// console.log(clamp(12, 0, 10));
// console.log(approxEqual(0.1 + 0.2, 0.3, 1e-12));

// That's a compact cheat-sheet to get started with numbers and math in JS.
// Add this file to your notes and experiment in the browser console or Node.

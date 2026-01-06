/**
 * COMPARISON OPERATORS
 * 
 * In JavaScript, comparison operators compare values and return a boolean (true/false).
 *
 * Examples of comparison variables:
 *
 * let a = 10;
 * let b = '10';
 * let x = 5;
 * let y = 8;
 *
 * // Equality
 * console.log(a == b);   // true  (loose equality: only match value )
 * console.log(a === b);  // false (strict equality: match both value and type)
 *
 * // Inequality
 * console.log(a != b);   // false (loose inequality : only match value)   
 * console.log(a !== b);  // true  (strict inequality: match both value and type)
 *
 * // Relational
 * console.log(x < y);    // true
 * console.log(x >= y);   // false
 *
 * // Logical combination
 * console.log(x < y && a === 10); // true
 *
 * Note:
 * - Use '===' and '!==' for strict comparisons to avoid unexpected behavior due to type coercion.
 * - Comparison operators return booleans and are often used in conditionals (if/else, loops).
 */

// Example variables (runnable):
let a = 10;
let b = '10';
let x = 5;
let y = 8;

console.log('a == b ->', a == b);
console.log('a === b ->', a === b);
console.log('a != b ->', a != b);
console.log('a !== b ->', a !== b);
console.log('x < y ->', x < y);
console.log('x >= y ->', x >= y);
console.log('x < y && a === 10 ->', x < y && a === 10);

// LOGICAL OPERATORS (notes and examples):
// - && (AND): returns the first falsy value or the last value if all are truthy (short-circuiting)
// - || (OR): returns the first truthy value or the last value if all are falsy (short-circuiting)
// - ! (NOT): returns the boolean inverse of a value's truthiness

console.log('x < y || a === 10 ->', x < y || a === 10);
console.log('!(a === 10) ->', !(a === 10));
console.log('a && b ->', a && b); // '10' (b) because a is truthy
console.log('0 || x ->', 0 || x); // shows x because 0 is falsy
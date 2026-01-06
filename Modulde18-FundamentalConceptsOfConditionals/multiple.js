/**
 * Multiple-condition logical operators (notes & examples)
 *
 * Operators:
 *  - && (AND): true if both operands are truthy. Short-circuits: returns the first falsy value or the last truthy value.
 *  - || (OR): true if at least one operand is truthy. Short-circuits: returns the first truthy value or the last falsy value.
 *  - ! (NOT): unary operator; coerces to boolean then negates.
 *
 * Keep examples short and readable — these show typical usage and short-circuit behavior.
 */

// Example variables
const a = 5;
const b = 10;

// AND: both conditions must be true
console.log('a < b && b === 10 ->', a < b && b === 10); // true

// OR: at least one condition true
console.log('a > b || a === 5 ->', a > b || a === 5); // true

// NOT: negation
console.log('!(a === b) ->', !(a === b)); // true

// Short-circuit behavior (side effects won't run if short-circuited)
function sideEffect() { console.log('sideEffect called'); return true; }
console.log('false && sideEffect() ->', false && sideEffect()); // false (sideEffect not called)
console.log('true || sideEffect() ->', true || sideEffect()); // true (sideEffect not called)

// Non-boolean values: && and || return the actual value, not just true/false (useful patterns)
console.log('null || "default" ->', null || 'default'); // 'default'
console.log('"" && "won\'t reach" ->', '' && "won't reach"); // ''

// Common patterns
// 1) Provide a default value with ||
const name = '';
const displayName = name || 'Guest';
console.log('displayName ->', displayName); // 'Guest'

// 2) Guard property access (before optional chaining)
const user = null;
console.log('user && user.name ->', user && user.name); // null

// Summary: Use && when all conditions must hold, || when any condition can satisfy, and ! to negate.
// Watch out for short-circuiting and truthy/falsy coercion when combining logical operators.



const salary = 25000;
const isBcs = true;

if(salary > 30000 && isBcs == true){
    console.log("You are a suuupatro");
}else{
    console.log("onno patro khuji");
}

if(salary > 30000 || isBcs == true){
    console.log("You are a suuupatro");
}else{
    console.log("onno patro khuji");
}
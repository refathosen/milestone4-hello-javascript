/*
 Shorthand operators examples and notes
 - +=, -=, *=, /=, %=  : combine an operation with assignment (a += b is a = a + b)
 - ++ and --           : increment / decrement operators (prefix vs postfix behavior)
 - += also works for string concatenation
*/

// 1) Addition assignment (+=)
let a = 10;
a += 5; // same as: a = a + 5
console.log('a after a += 5 ->', a); // 15

// 2) Subtraction assignment (-=)
let b = 20;
b -= 4; // same as: b = b - 4
console.log('b after b -= 4 ->', b); // 16

// 3) Multiplication assignment (*=)
let c = 3;
c *= 4; // c = c * 4
console.log('c after c *= 4 ->', c); // 12

// 4) Division assignment (/=)
let d = 20;
d /= 5; // d = d / 5
console.log('d after d /= 5 ->', d); // 4

// 5) Modulo assignment (%=)
let e = 10;
e %= 3; // e = e % 3
console.log('e after e %= 3 ->', e); // 1

// 6) String concatenation with +=
let s = 'Hello';
s += ' World'; // s = s + ' World'
console.log('s after s += " World" ->', s); // "Hello World"

// 7) Increment (++) and Decrement (--)
let i = 5;
i++; // postfix increment: returns old value in expressions, then increments
console.log('i after i++ ->', i); // 6

let j = 5;
++j; // prefix increment: increments first, then returns new value in expressions
console.log('j after ++j ->', j); // 6

// Demonstrate prefix vs postfix in expressions
let x = 5;
console.log('x++ (returns old value) ->', x++); // logs 5, x becomes 6
console.log('after x++, x ->', x); // 6

let y = 5;
console.log('++y (increments then returns) ->', ++y); // logs 6, y is 6

// Using postfix in an expression
let z = 2;
let result = z++ + 3; // result = 2 + 3, then z becomes 3
console.log('result with z++ + 3 ->', result, '; z after ->', z); // 5, z = 3

// Quick notes:
// - Shorthand assignments modify the left-hand variable in place.
// - Use prefix (++x) when you need the incremented value immediately in an expression.
// - Use postfix (x++) when you need the original value first, then increment afterwards.

// End of shorthand operator examples

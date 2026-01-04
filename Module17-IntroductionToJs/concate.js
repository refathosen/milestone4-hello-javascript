/* Concatenation examples and notes
 - Use + to concatenate strings
 - + also performs numeric addition when both operands are numbers
 - Order matters when mixing strings and numbers (left-to-right evaluation)
 - Template literals are often clearer for building strings
*/

let firstName = 'Mobarok';
let lastName = 'Tobarok';

// 1) Simple concatenation (no space)
let fullName = firstName + lastName;
console.log('No space:', fullName); // "MobarokTobarok"

// 2) Add a space between names
let fullNameWithSpace = firstName + ' ' + lastName;
console.log('With space:', fullNameWithSpace); // "Mobarok Tobarok"

// 3) Using template literals (preferred for readability)
let fullTemplate = `${firstName} ${lastName}`;
console.log('Template literal:', fullTemplate); // "Mobarok Tobarok"

// 4) Using += for concatenation
let greeting = 'Hello';
greeting += ', ' + firstName + '!'; // greeting = greeting + ', ' + firstName + '!'
console.log('Greeting:', greeting); // "Hello, Mobarok!"

// 5) Mixing numbers and strings (watch out for coercion)
console.log('1 + "2" ->', 1 + '2'); // "12" (number coerced to string)
console.log('"3" + 4 + 5 ->', '3' + 4 + 5); // "345" (left-to-right: '3'+4 -> '34', +5 -> '345')
console.log('3 + 4 + "5" ->', 3 + 4 + '5'); // "75" (3+4 -> 7, then '7' + '5' -> '75')
console.log('1 + 2 + "3" ->', 1 + 2 + '3'); // "33"

// 6) String.concat method (less commonly used)
let joined = 'Foo'.concat('Bar', 'Baz');
console.log('concat method ->', joined); // "FooBarBaz"

// 7) Template with expressions
console.log(`Full: ${firstName} ${lastName.toUpperCase()} (${1 + 2} items)`); // evaluates expressions

// Quick tips:
// - Prefer template literals for readability.
// - Be explicit with spaces (" " ) when concatenating words.
// - When mixing numbers and strings, use explicit String() or Number() to avoid surprises.



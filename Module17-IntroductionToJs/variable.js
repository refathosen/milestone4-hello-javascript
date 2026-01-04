// what is a variable?
// A variable is a named storage/container for data that can be changed during program execution.

// variable structure:
// keyword variableName = value;

// how to declare variables in JavaScript
// keyword: var, let, and const
// difference between them:

// var: function-scoped, can be redeclared and updated
// what is function-scoped: a variable declared inside a function is only accessible within that function

// let: block-scoped, can be updated but not redeclared
// const: block-scoped, cannot be updated or redeclared
// what is block-scoped: a variable declared inside a block {} is only accessible within that block

// variable name rules:
// 1. Must begin with a letter, underscore (_), or dollar sign ($)
// 2. Subsequent characters can be letters, digits, underscores, or dollar signs
// 3. Cannot be a reserved keyword
// 4. Case-sensitive : uppercase and lowercase letters are different

// case examples:
// different variables because of case sensitivity
let myVar = 1;
let MyVar = 2;
console.log("myVar:", myVar, "MyVar:", MyVar); // shows they are different

// uppercase convention (often used for constants):
const MAX_SPEED = 120;
console.log("MAX_SPEED:", MAX_SPEED);

// variable declaration examples:
// var myVariable;

// variable value assign examples:
// var myVariable = 10;

// variable value types examples:
// Number
let score = 95; // number
// String
let greeting = "Hello"; // string
// Boolean
let isLoggedIn = true; // boolean
// null and undefined
let emptyValue = null; // intentional absence of value
let notAssigned; // undefined (no value assigned)
console.log("score:", score, "greeting:", greeting, "isLoggedIn:", isLoggedIn, "emptyValue:", emptyValue, "notAssigned:", notAssigned);

// Object and Array
let user = { name: "Alice", age: 30 }; // object
let numbers = [1, 2, 3]; // array (a type of object)
console.log("user:", user, "numbers:", numbers);

// structure : keyword variableName = value;
// Using var
var weight = 70;
var height = 175;
var age = 25;
age = 26; // reassigning age


// using console.log to print the variable values
console.log("Weight:", weight);
console.log("Height:", height);
console.log("Age:", age);


// Using let
let city = "New York";
let country = "USA";
city = "Los Angeles"; // reassigning city

// using console.log to print the variable values
console.log("City:", city);


// practice::
let firstName = "Refat";
let lastName = "Utsab";
lastName = "Hosen"; // reassigning lastName

console.log("Full Name:", firstName + " " + lastName);
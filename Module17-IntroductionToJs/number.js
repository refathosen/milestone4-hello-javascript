// Number data type in JavaScript
let age = 25; // Integer
let price = 19.99; // Float
let isAvailable = true; // Boolean
console.log("Age:", age);
console.log("Price:", price);
console.log("Is Available:", isAvailable);

//convert string to float number
let strNumber = "123.45";
let convertedNumber = parseFloat(strNumber);
console.log("Converted Number:", convertedNumber);  // Output: 123.45
console.log("Type of Converted Number:", typeof convertedNumber); // Output: number

// convert string to integer number
let intString = "678";
let convertedInt = parseInt(intString);
console.log("Converted Integer:", convertedInt);  // Output: 678
console.log("Type of Converted Integer:", typeof convertedInt); // Output: number

// To convert number to string
let number = 123.45;
let convertedString = number.toString();
console.log("Converted String:", convertedString);  // Output: "123.45" 
console.log("Type of Converted String:", typeof convertedString); // Output: string

// Demonstrating NaN (Not a Number)
let invalidNumber = parseInt("abc");
console.log("Invalid Number:", invalidNumber); // Output: NaN
console.log("Type of Invalid Number:", typeof invalidNumber); // Output: number
// Checking if a value is NaN
console.log("Is Invalid Number NaN?", isNaN(invalidNumber)); // Output: true        
// Demonstrating Infinity
let largeNumber = 1 / 0;
console.log("Large Number:", largeNumber); // Output: Infinity
console.log("Type of Large Number:", typeof largeNumber); // Output: number 
let negativeLargeNumber = -1 / 0;
console.log("Negative Large Number:", negativeLargeNumber); // Output: -Infinity
console.log("Type of Negative Large Number:", typeof negativeLargeNumber); // Output: number


// V.V.I
// toFixed() method to format number to specific decimal places

let num1 = 0.1;
let num2 = 0.2;

let sum = num1 + num2;
console.log("Sum without toFixed:", sum); // Output: 0.30000000000000004    
console.log("Type of sum:", typeof sum); // Output: number

let fixedSum = sum.toFixed(2);
console.log("Sum with toFixed(2):", fixedSum); // Output: "0.30" (string)
console.log("Type of fixedSum:", typeof fixedSum); // Output: string    
let preciseSum = parseFloat(fixedSum);
console.log("Precise Sum after parseFloat:", preciseSum); // Output: 0.3 (number)
console.log("Type of preciseSum:", typeof preciseSum); // Output: number
// Note: toFixed() returns a string, so we use parseFloat() to convert it back to a number.

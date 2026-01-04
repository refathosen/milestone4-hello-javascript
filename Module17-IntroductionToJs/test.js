let name = "Safwan"; // String data type
let age = 1.3 + ' years'; // numeric data type combined with string
age = 1.1 + ' years'; //reassigning age
let isBaby = true; //Boolean data type
let sibling = null; //null data type


// console.log("Name:", name);
// console.log("Age:", age);
// console.log("Is Baby:", isBaby);
// console.log("Sibling:", sibling);

//typeof operator to check data types
// console.log("type of name:", typeof name); // Output: string
// console.log("type of age:", typeof age);   // Output: string
// console.log("type of isBaby:", typeof isBaby); // Output: boolean
// console.log("type of sibling:", typeof sibling); // Output: object


// Camel Case Naming Convention
let firstName = "Safwan";
let lastName = "Hossain";
// console.log("Full Name:", firstName + " " + lastName);

// numbers in js

let orangePrice = 50;
let applePrice = 100;
applePrice = '100';  //reassigning applePrice as string but it was number before , so this is wrong practice . it will show the total as 50100


//console.log(orangePrice + applePrice);

let intString = "789";
let convertedint = parseInt(intString);
// console.log(convertedint)
// console.log(typeof convertedint);

let floatString = "789.16";
let convertedfloat = parseFloat(floatString);
// console.log(convertedfloat)
// console.log(typeof convertedfloat);


// NAN
let num = 'fgthgfvhgv';
console.log(parseInt(num)); // it will show NaN not a number

let income = parseInt('5000.50');
let income2 = parseFloat('5000.50');
console.log(income); // it will show 5000 as integer
console.log(income2); // it will show 5000.5 as float


// toFixed
let price = 12.56789;
let fixedPrice = price.toFixed(2);
console.log(fixedPrice); // it will show 12.57 as string
console.log(typeof fixedPrice); // it will show string
let fixedPriceNumber = parseFloat(fixedPrice);
console.log(typeof fixedPriceNumber); // it will show number
// console.log(fixedPriceNumber); // it will show 12.57 as number
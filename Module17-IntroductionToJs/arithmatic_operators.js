// Operators in JavaScript
// Operators structure : operand1 operator operand2
// Example : 5 + 10 = 15 ( here 5 and 10 are operands , + is the operator and 15 is the result)
// There are different types of operators in JavaScript : Arithmetic , Assignment , Comparison , Logical , String , Conditional (Ternary) , Typeof , Bitwise etc.


// Arithmetic Operators
let mangoPrice = 200;
let bananaPrice = 50;   

let totalPrice = mangoPrice + bananaPrice; // Addition
console.log("Total Price:", totalPrice); // Output: 250

let priceDifference = mangoPrice - bananaPrice; // Subtraction
console.log("Price Difference:", priceDifference); // Output: 150

let productPrice = mangoPrice * bananaPrice; // Multiplication
console.log("Product Price:", productPrice); // Output: 10000

let divisionPrice = mangoPrice / bananaPrice;   // Division
console.log("Division Price:", divisionPrice); // Output: 4

let remainderPrice = mangoPrice % bananaPrice; // Modulus -> VAAGSESH
// what is reminder : when we divide 200 by 50 there is no remainder left . so the output will be 0
console.log("Remainder Price:", remainderPrice); // Output: 0 

let incrementPrice = ++mangoPrice; // Increment
// here mangoPrice was 200 before incrementing so after incrementing it will be 201
console.log("Incremented Mango Price:", incrementPrice); // Output: 201

let decrementPrice = --bananaPrice; // Decrement
// here bananaPrice was 50 before decrementing so after decrementing it will be 49
console.log("Decremented Banana Price:", decrementPrice); // Output: 49 

// Exponentiation
let exponentiationPrice = mangoPrice ** 2; 
console.log("Exponentiation Price (Mango Price squared):", exponentiationPrice); // Output: 40401   
let anotherExponentiation = bananaPrice ** 3;
console.log("Another Exponentiation (Banana Price cubed):", anotherExponentiation); // Output: 117649

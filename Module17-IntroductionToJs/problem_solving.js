// Practice 1: Calculate the shopkeeper's return amount
let myBudget = 1000;

let applePrice = 400;
let orangePrice = 300;

let totalPrice = applePrice + orangePrice;

let shopkeeperReturn = myBudget - totalPrice;

console.log("Shopkeeper will return:", shopkeeperReturn);


// Practice 2: Average of marks

let mathMarks = 75.25;
let biologyMarks = 65;
let chemistryMarks = 80;
let physicsMarks = 35.45;
let banglaMarks = 99.50;

let totalMarks = mathMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;

let averageMarks = totalMarks / 5;
console.log("Average marks:", averageMarks.toFixed(2));


// Practice 3: Reminder of division

let number = 119;
let divisor = 5;

let reminder = number % divisor;

console.log("Reminder is:", reminder);

// Practice 4: following code result

const a = isNaN('11');

console.log(a); // false, because '11' is a valid number string

const b = isNaN(2-10);
console.log(b); // false, because 2-10 = -8 which is a valid number
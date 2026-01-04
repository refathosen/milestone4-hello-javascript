// Naming conventions in JavaScript
// 1. camelCase: The first word is in lowercase, and the first letter of each subsequent concatenated word is capitalized.
let firstName = "John";
let lastName = "Doe";                   
console.log("First Name:", firstName);
console.log("Last Name:", lastName);    
// 2. PascalCase: The first letter of each concatenated word is capitalized.
let FullName = "Jane Smith";
console.log("Full Name:", FullName);        
// 3. snake_case: Words are separated by underscores and are usually in lowercase.
let user_name = "alice_wonderland";             
console.log("User Name:", user_name);
// 4. kebab-case: Words are separated by hyphens (not commonly used in JavaScript variable names, more in file names or URLs).
let file-name= "my-document.txt"; // This will cause an error if used as a variable name
console.log("File Name:", file-name); // This will cause an error if used as a variable name

// Best practices for naming variables:
// 1. Use meaningful and descriptive names that convey the purpose of the variable.
let ageInYears = 25;    
console.log("Age in Years:", ageInYears);
// 2. Avoid using reserved keywords (like var, let, const, function, etc.) as variable names.
// 3. Start variable names with a letter, underscore (_), or dollar sign ($); avoid starting with numbers.
// 4. Be consistent with the naming convention you choose throughout your codebase.
let $price = 100; // valid variable name
let _quantity = 5; // valid variable name
console.log("Price:", $price);
console.log("Quantity:", _quantity);
// 5. Use camelCase for variable and function names, PascalCase for class names, and UPPER_SNAKE_CASE for constants.
const MAX_HEIGHT = 200;
console.log("Max Height:", MAX_HEIGHT);
// 6. Avoid using single-character names except for loop counters or very short-lived variables.
for (let i = 0; i < 5; i++) {
    console.log("Loop Counter:", i);
}
// 7. Use plural names for arrays or collections to indicate they hold multiple values.
let userList = ["Alice", "Bob", "Charlie"];
console.log("User List:", userList);
// 8. Avoid using special characters or spaces in variable names.
let invalid_name = "test"; // This will cause an error
console.log("Invalid Name:", invalid_name); // This will cause an error
// 9. Keep variable names concise but informative; avoid overly long names.
let numOfItems = 10; 
console.log("Number of Items:", numOfItems);
// 10. Use comments to explain the purpose of complex variables if necessary.
// This variable holds the total price after applying discounts and taxes
let totalPrice = 150.75; 
console.log("Total Price:", totalPrice);
// Following these conventions and best practices will help improve code readability and maintainability.


// No keywords are used as variable names in this code.
// No gaps or special characters are used in variable names, except for underscores and dollar signs where appropriate.
// No quotes are used in variable names.
// Can not start variable names with numbers but numbers can be used after the first character.
// Variable names are case-sensitive. example: 'firstName' and 'FirstName' are different variables.
// How to write multi-word variable names using different naming conventions is demonstrated. example: camelCase, PascalCase, snake_case.
// Common javascript keywords examples: var, let, const, function, return, if, else, for, while, switch, case, break, continue, try, catch, finally, throw, class, extends, super, this, new, delete, typeof, instanceof, void, yield, async, await.
// keywords can only be written in lowercase.
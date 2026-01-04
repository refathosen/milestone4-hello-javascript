// data types in JavaScript
// Primitive data types: string, number, boolean, null, undefined, symbol, bigint

// String: sequence of characters enclosed in single or double quotes
let name = "John Doe";
let greeting = 'Hello, ' + name + '!';
console.log(greeting); // Output: Hello, John Doe!

// Number: numeric data type (both integer and floating-point)
let age = 30;   
let height = 5.9;
console.log("Age:", age);       // Output: Age: 30          
console.log("Height:", height); // Output: Height: 5.9

// Boolean: represents true or false values
let isStudent = false;
console.log("Is Student:", isStudent); // Output: Is Student: false 
            
// Null: represents the intentional absence of any object value 
let emptyValue = null;
console.log("Empty Value:", emptyValue);    // Output: Empty Value: null    
// Undefined: indicates that a variable has not been assigned a value
let uninitializedVar;
console.log("Uninitialized Variable:", uninitializedVar); // Output: Uninitialized Variable: undefined

// Symbol: a unique and immutable primitive value used as the key of an object property
let sym1 = Symbol('description');
let sym2 = Symbol('description');
console.log("Are symbols equal?", sym1 === sym2); // Output: Are symbols equal? false
// BigInt: represents integers with arbitrary precision
let bigIntNum = BigInt(9007199254740991);
console.log("BigInt Number:", bigIntNum); // Output: BigInt Number: 9007199254740991n   

// Non-primitive data type: Object
let person = {
    name: "Alice",
    age: 28,
    isEmployed: true
};
console.log("Person Object:", person); // Output: Person Object: { name: 'Alice', age: 28, isEmployed: true }
console.log("Person's Name:", person.name); // Output: Person's Name: Alice
// Array: a special type of object used to store ordered collections
let numbers = [1, 2, 3, 4, 5];
console.log("Numbers Array:", numbers);

console.log("First Number:", numbers[0]); // Output: First Number: 1

// Function: a block of code designed to perform a particular task  
function add(a, b) {
    return a + b;
}       
console.log("Sum:", add(5, 10)); // Output: Sum: 15 
// Typeof operator: used to determine the type of a variable or value
console.log("Type of name:", typeof name);         // Output: Type of name: string      
console.log("Type of age:", typeof age);           // Output: Type of age: number
console.log("Type of isStudent:", typeof isStudent);                        
// Output: Type of isStudent: boolean
console.log("Type of emptyValue:", typeof emptyValue);
// Output: Type of emptyValue: object   
console.log("Type of uninitializedVar:", typeof uninitializedVar);      
// Output: Type of uninitializedVar: undefined
console.log("Type of sym1:", typeof sym1);          // Output: Type of sym1: symbol
console.log("Type of bigIntNum:", typeof bigIntNum); // Output: Type of bigIntNum: bigint
console.log("Type of person:", typeof person);      // Output: Type of person: object
console.log("Type of numbers:", typeof numbers);    // Output: Type of numbers: object  
console.log("Type of add function:", typeof add);   // Output: Type of add function: function       
// Note: In JavaScript, arrays and functions are also considered objects.   



// practice object declaration
let car = {
    brand : "Tesla",
    model : "Model S",
    year : 2022
};

console.log("Object : ", car);
console.log("Car Brand :", car.brand);
console.log("Car Model :", car.model);
console.log("Car Year :", car.year);

// object structure explanation
// key: value pairs
// keys are strings (property names)
// values can be of any data type (string, number, boolean, object, array, function, etc.)

// Detailed object structure: nested objects, methods, computed keys, and property manipulation
let book = {
    title: "Eloquent JS",
    author: {
        firstName: "Marijn",
        lastName: "Haverbeke"
    },
    year: 2018,
    genres: ["Programming", "JavaScript"],
    available: true,
    getSummary: function() {
        return `${this.title} by ${this.author.firstName} ${this.author.lastName} (${this.year})`;
    },
    // method shorthand
    shortSummary() {
        return `${this.title} (${this.year})`;
    }
};

console.log("Book Object:", book);
console.log("Book Author's First Name:", book.author.firstName);
console.log("Genres:", book.genres.join(", "));
console.log("Summary:", book.getSummary());
console.log("Short Summary:", book.shortSummary());

// Adding and deleting properties
book.pages = 472; // add a new property
delete book.available; // remove a property
console.log("Pages:", book.pages);
console.log("Has 'available' property?", book.hasOwnProperty('available'));

// Iterating over properties
for (let key in book) {
    if (book.hasOwnProperty(key)) {
        console.log(key + ":", book[key]);
    }
}

// Object utility methods
console.log("Keys:", Object.keys(book));
console.log("Values:", Object.values(book));
console.log("Entries:", Object.entries(book));

// Destructuring
let { title, author: { firstName }, year: published } = book;
console.log("Destructured:", title, firstName, published);

// Computed property names
let propName = "rating";
let review = {
    [propName]: 4.5
};
console.log("Computed prop:", review.rating);

// Shallow copy using spread
let bookCopy = { ...book, edition: "2nd" };
console.log("Book Copy:", bookCopy);


    
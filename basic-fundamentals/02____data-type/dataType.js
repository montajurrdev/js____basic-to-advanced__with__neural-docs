// A data type tells JavaScript what kind of value is stored in a variable. 

// string
let greeting = "Hello!";
console.log(typeof greeting); // string

// Number
let price = 99.99;
console.log(typeof price);  // number

// Boolean
let isLoggedout = true;
console.log(typeof isLoggedout);


//===========================================================

// JavaScript has two main categories of Data Type:
// 1. Primitive (simple values, ancient, immutable itself)
// 2. Non-Primitive (Reference Type, mutable, can store complex entities,) — object

// Primitives are directly stored in the "stack" or memory while Non-Primitives variables doesn't hold values itself.
// it holds a reference to a memory where data live. That's why it is called reference type.
// Both functions and arrays are considered types of objects

//============================================================

// Primitives

// string (text inside quotes)
let hello = "Hello!";
console.log(typeof hello); // string

let name = "Montajur";
let sentence = `My name is ${name}`  // embedded expressions inside backtick or backquotes — template literals
console.log(sentence);


// Number
// includes integer, decimal, special values: infinity, NaN
price = -89.95; // decimal
let age = 23; //integer
let infinityValue = Infinity;
let notANumber = NaN;
console.log(typeof notANumber);

console.log(price) // (-89.95)
console.log(age) // 23
console.log(infinityValue) // Infinity 
console.log(notANumber) // NaN

// Boolean
let isLoggedIn = true;
isLoggedIn = false;
console.log(typeof isLoggedIn); // boolean


// undefined  (declared but not given a value)
let a;  
console.log(typeof a)  //undefined


// BigInt
let big = 8474394305709843n;  // suffix n mean BigInt
console.log(typeof big)  // bigint



// Null (nothing or empty value)
let b = null;
console.log(b) // null
console.log(typeof b); // object

// It is one of the most famous "quirks" in the history of programming.
// It was a mistake in the very first version of JavaScript, and it’s now too late to fix it.
// a null pointer is represented as all zeros (0x00).
// In the original implementation of JavaScript, values were stored in 32-bit units.
// To make the engine fast, the first few bits of those units were used as a "type tag" to identify what kind of data it was.
// Objects were assigned the type tag 000.
// the JavaScript engine checked the first three bits to determine the type, it saw 000 and incorrectly categorized null as an Object.
// If the developers changed typeof null to return "null" tomorrow:
// Thousands of old websites would break instantly.

// we can understand 
console.log(b=== null) // true
console.log(b=== Object) // false

// not like this
// console.log(typeof b === null);





// Symbol (unique identifier)
let id = Symbol("unique")
console.log(typeof id);
console.log(id);

let id1 = Symbol("monir")  // monir = description , it doesn't affect the symbol's uniqueness.
let id2 = Symbol("monir")

console.log(id1 === id2) // false

// symbol in object
let user = {
    name: "Montajur Rahman"
};
const MyId = Symbol("unique");
user[MyId] = 12345;  
// user.MyId — if we use dot instead of squere brackets, it means it find a property actualy name as MyId.
// user[MyId] — Squere brackets tell javascript: Evaluate what is inside these brackets first, then use that result as the key

console.log(user[MyId]) // 12345

// global resistry with symbol
// Symbol.for() 
// we can access globally
let globalId = Symbol.for("app.user.id")
    // anywhere
let sameId = Symbol.for("app.user.id")

    console.log(globalId === sameId)  // true



//======================================================

//Non-Primitive

// Object
let person = {
    name: "Montajur rahman",
    age: 23
}
console.log(person)
console.log(person.name)
console.log(person.age)

// Array (special kind of object)
let arr = ["monir", "khan", "rahman", "montajur", 23, 2026]
// index start with 0, there is 0-5
console.log(arr);
console.log(arr[1]);  // khan
console.log(arr[5]);  // 2026


// function  (also an object)
function sayHello() {
    return "Hello World!";
}
console.log(sayHello());


//===============================================
// reference type details

// Primitive Data is stored directly in memory. when we copy them, we get a new independent value.
let x = 10;
let y= x; // copy the value of x
y= 20;

console.log(x); // 10 (unchanged)
console.log(y); // 20 
// x and y are separate. changing y doesn't affect x.


// Non-Primitive data is stored as a reference(memory address). when we copy them, we copy the reference, not the actual value. 
// So, two varibles can point to the same object.
let person1 = {name: "monir", age: 23};

let person2 = person1; // copy the reference
person2.name = "Montajur";

console.log(person1.name); // Montajur 
console.log(person2.name); // Montajur
// Both point to the same object in memory. changing one affects the other. 
// reference type is a rules, it has logic behind based on javascript.
// Because, these are complex structure that can hold multiple value.
// that's why javascript store them once and give reference to that memory. 













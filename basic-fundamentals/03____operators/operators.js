// In JavaScript, Operators are symbols or keyword used to perform operations or actions on values and variables. 

// Arithmetic (math)
let sum = 10 + 5;
console.log(sum); // 15

let a = 10, b =3;

console.log(a + b); // 13 (Addition)
console.log(a - b); // 7  (Subtraction)
console.log(a * b); // 30 (Multiplication)
console.log(a / b); // 3.333n  (Division)
console.log(a % b); // 1 (Remainder or Modulo) — vagses
console.log(a ** b); // 1000 (Exponentiation: 10^3) 


//
// Assignment (set/update values)
let x = 5;

x += 2;   // x = x + 2 → 7
x -= 1;   // x = x - 1 → 6
x *= 3;   // x = x * 3 → 18
x /= 2;   // x = x / 2 → 9
x %= 4;   // x = x % 4 → 1

console.log(x);


// Comparison
// Used to compare values. They return true or false

console.log(5 == "5");  // true (loose equality)
console.log(5 === "5");  // false (strict equality)

let c = 5, d = "5";
// console.log(typeof d);  string

console.log(c == d);   // true (equal, ignores type)
console.log(c === d);  // false (strict equal, checks type too)
console.log(c != d);  // false (not equal, ignores type)
console.log(c !== d);  // true (strict equal, checks type too)
console.log(c > 3);   // true
console.log(c < 3);   // false
console.log(c >= 5);   // true
console.log(c <= 4);   // false

console.log("monir")


// Logical 
// determine the logic between variables or values, typically used in if statement

// AND (&&): returns true if both statements are true
// OR  (||): returns true if at least one statement is true
// NOT (!) : reverses the result (true becomes false)

let loggedIn = true;
let hasAccess = false;
console.log(loggedIn && hasAccess);  // false

console.log(true && false);  // false (AND)
console.log(true || false);  // true  (OR)
console.log(!true);          // false (NOT)


// String
let firstName = "Montajur";
let lastName = "Rahman";

console.log(firstName + lastName);        // MontajurRahman
console.log(firstName + " " + lastName);  // Montajur Rahman

// Miscellaneous (specialty)
// 1. Ternary( ? : ), 2. typeof, 3. delete

// Ternary (one line if/else statement)
let age = 17;
let status = (age >= 18) ? "Adult" : "Minor";

console.log(status);

// typeof (check type)
console.log(typeof 123);     // number
console.log(typeof monir);   // undefined
console.log(typeof "monir"); // string
console.log(typeof true);    // boolean

// delete (remove property from object)
let person = {name: "Montajur", age: 23};
delete person.age

console.log(person);  // {name: "Montajur"}


// Bitwise
// Bitwise operators compare numbers bit by bit.
// Computer understand numbers in binary (base 2)

// 5 = 0000,0101
// 3 = 0000,0011


// AND (&) — returns 1 only if both bit are 1
console.log(5 & 3);  // 0001 = 1


// OR (|) — returns 1 if at least one bit is 1
console.log(5 | 3);  // 0111 = 7 


// XOR (^) — returns 1 if bits are different
console.log(5 ^ 3);  // 0110 = 6


// NOT (~) — [~n = -(n + 1)] 
console.log(~5);  // -6


// Left shift (<<) — multiply by 2
console.log(5 << 1);  // 5*1*2 = 10
console.log(5 << 2);  // 5*2*2 = 20


// Right Shift (>>) — divide by 2
console.log(8 >> 1); // 8/1/2 = 4
console.log(8 >> 2); // 8/2/2 = 2

// Unsigned Right Shift (>>>)
// similar to >> but always returns positive number
console.log(12 >>> 2);  // 3  



// binary logic (0, 1)

// AND (common)
// 1 & 1 = 1
// 1 & 0 = 0  
// 0 & 1 = 0   
// 0 & 0 = 0

// OR (universal)
// 1 | 1 = 1 
// 1 | 0 = 1  
// 0 | 1 = 1 
// 0 | 0 = 0

// XOR (bit deferent = 1, same = 0)
// 1 ^ 1 = 0
// 1 ^ 0 = 1
// 0 ^ 1 = 1
// 0 ^ 0 = 0
















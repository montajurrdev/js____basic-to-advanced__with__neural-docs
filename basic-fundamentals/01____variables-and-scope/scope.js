// function-scope
// when we declare a variable with var inside a function, it is only available inside that function.
// we cannot use it outside the function.
function myFunction() {
  var message = "Hello!";
  console.log(message); //work inside the function
}

// (can't work outside)
// console.log(message); // Error: message is not defined

myFunction();

// block-scope
// a block means anything inside curly braces{}
// variables declared with let or const only exist inside that block
if (true) {
  let city = "Dhaka";
  const country = "Bangladesh";
  console.log(city); //work
  console.log(country); //work
}

// outside curly braces
// console.log(city);  // Error: can't work outside
// console.log(country);  // Error: can't work outside

// var doesn't care about block — only function
if (true) {
  var color = "green";
  console.log(color);
}

// outside
console.log(color); // still works

//===========================================================

// so breakdown
// let and const — block-scope with function
// var — only function-scope

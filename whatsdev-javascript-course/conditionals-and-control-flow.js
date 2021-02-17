
// #################################
// ## Conditionals & Control Flow ##
// #################################

// Basic if statement
var num1 = 20;

if (num1 > 0) {
  console.log("The number is positive");
} // "The number is positive"


// If/Else statement
var num2 = -4;

if (num2 > 0) {
  console.log("The number is positive");
} else {
  console.log("The number is not positive");
} // "The number is not positive"

// If/ElseIf/Else statement
var num3 = 0;

if (num3 > 0) {
  console.log("The number is positive");
} else if (num3 < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
} // "The number is zero"

// If/ElseIf/Else statement using prompt and alert
// var num4 = prompt("Enter a number");

// if (num4 > 0) {
//   alert("The number is positive");
// } else if (num4 < 0) {
//   alert("The number is negative");
// } else {
//   alert("The number is zero")
// };


// Equality Operator - must be === for strict equalityyes
var isRaining = "yes";

if (isRaining === "yes") {
  console.log("Take an umbrella");
} else {
  console.log("No umbrella needed");
}

// Non equality operator - !==
var isSnowing = "no";

if (isSnowing !== "no") {
  console.log("Are you sure it's actually snowing?");
} else {
  console.log("No snowboots needed");
}

// Logical Operators
// && - AND; || - OR; ! - NOT

// true && true === true
// true && false === false
// false && true === false
// false && false === false

// true || true === true
// true || false === true
// false || true === true
// false || false === false

// !true === false
// !false === true

var name = "lexi";
var age = 17;
var highSchoolDegree = true;

// Job1 Requirements: over 18 and high school degree
if (age >= 18 && highSchoolDegree === true) {
  console.log("Eligible for Job1");
} // No output

// Job2 Requirements: over 17 and high school degree
if (age >= 17 && highSchoolDegree === true) {
  console.log("Eligible for Job2");
} // "Eligible for Job2"

// Job3 Requirements: over 18 or high school degree
if (age >= 18 || highSchoolDegree === true) {
  console.log("Eligible for Job3");
} // "Eligible for Job3"

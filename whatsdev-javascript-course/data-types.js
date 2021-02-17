// ################
// ## Data Types ##
// ################

// String
console.log("This is a string");

// Number - no different types for integers and floats
console.log(48769);
console.log(3.1416);

// Boolean - words are reserved
console.log(true);
console.log(false);

// Null - absence of real value
console.log(null);


// Symbol - TBC


// Array - type of object. Can have multiple data types
console.log(["parsnip", "carrot", "potato"]);
console.log(1, 2, 3);
console.log(["apple", 30, true]);

// Object - value/key pairs - unquoted key names can cause JSON issues
console.log({
  "name" : "Andy",
  "age": 36,
  "married": false,
  "hobbies": ["skydiving", "trumpet"],
});

// Variable - name some data for later callback
var name = "Andy";
var num = 9.81;
var status = true;
var empty = null;
var fruits = ["apple", "banana", "cherry"];
var person = {
  "name": "Karen",
  "age": 62,
  "married": true,
  "hobbies": ["jigsaws", "gin"]
};

console.log(name);
console.log(num);
console.log(status);
console.log(empty);
console.log(fruits);
console.log(person);

// typeof

console.log(typeof name);
console.log(typeof num);
console.log(typeof status);
console.log(typeof empty);
console.log(typeof fruits);
console.log(typeof person);

// Undefined - declared variable with no data
var sentence;
console.log(sentence);

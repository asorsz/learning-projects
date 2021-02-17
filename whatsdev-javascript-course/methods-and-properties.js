// ##########################
// ## Methods & Properties ##
// ##########################

// Strings
var sentence = "John is walking home";

console.log(sentence.length); // 20
console.log(sentence.indexOf("i")); // 5
console.log(sentence.indexOf("walking")); // 8
console.log(sentence.indexOf("o")); // 1 (first instance)
console.log(sentence.replace("is","was")); // "John was walking home" (does not mutate)
console.log(sentence.toUpperCase()); // "JOHN IS WALKING HOME"
console.log(sentence.toLowerCase()); // "john is walking home"
console.log(sentence.slice(0, 9)); // "John is w"
console.log(sentence.slice(9)); // "alking home"
console.log(sentence.split(" ")); // ["John", "is", "walking", "home"] - delimiter as argument

// Numbers
var num = 45;

console.log(num + 2); // 47
console.log(num - 2); // 43
console.log(num * 2); // 90
console.log(num / 2); // 22.5
console.log(num % 5); // 0
console.log(num % 7); // 3

console.log(Number.isInteger(num)); // true
console.log(Number.isInteger(num + 0.7)); // false

console.log(num.toString()); // "45"

console.log(Math.pow(num, 2)); // 2025
console.log(Math.abs(-2)); // 2
console.log(Math.round(2.56)); // 3
console.log(Math.floor(2.56)); // 2
console.log(Math.min(45,33,56)); // 33
console.log(Math.max(45,33,56)); // 56

console.log(Math.random()); // random between 0 and 1
console.log(Math.random() * 10); // random between 0 and 10
console.log(Math.round(Math.random() * 10)); // random integer between 1 and 10

// Arrays
var drinks = ["beer", "wine", "gin"];

console.log(drinks.length); // 3
console.log(drinks.indexOf("wine")); // 1 - index starts at 0

drinks.reverse(); // Reverse - MUTATES
console.log(drinks); // ["gin", "wine", "beer"]

drinks.push("vodka"); // Add to end - MUTATES
console.log(drinks); // ["gin", "wine", "beer", "vodka"]

drinks.pop(); // Remove from end - MUTATES
console.log(drinks); // ["gin", "wine", "beer"]

drinks.unshift("water"); // Add to start - MUTATES
console.log(drinks); // ["water", "gin", "wine", "beer"]

drinks.shift(); // Remove from start - MUTATES
console.log(drinks); // ["gin", "wine", "beer"]

console.log(drinks.join(" ")); // "gin wine beer" - Returns as string using deliminator - DOES NOT MUTATE

//Objects
var student = {
  "name": "John Doe",
  "age": 21,
  "profession": "student",
  "grades": [9, 8, 4],
};

console.log(student["age"]); // 21
console.log(student.name); // John Doe
console.log(student.grades); // [9, 8, 4]
console.log(student.grades[2]); // 4

student.course = "Chem Eng"; // Add key/value pair
student["hobby"] = "swimming"; // Add key/value pair
console.log(student); // {..., "course": "Chem Eng", "hobby": "swimming"}

delete student.age; // Remove key/value pair
delete student["profession"]; // Remove key/value pair
console.log(student);

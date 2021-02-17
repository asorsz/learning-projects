// ###############
// ## For Loops ##
// ###############

// Starting point; condition for end; incrementor
// Console Log 0 to 15
for (var i = 0; i <= 15; i++) {
  console.log(i);
}

// Add 1 to 10
var total = 0;

for (var num = 0; num < 11; num++) {
  total += num;
}

console.log("The total is " + total);

// Loop through an array
var fruits = ["mango", "banana", "apple", "cherry", "tomato"];

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Loop through an object
var data = {
  "name": "John",
  "age": 28,
  "maritalStatus": true,
};

for (var elem in data) {
  console.log(elem, data[elem]);
}

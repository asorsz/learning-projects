// #################
// ## While Loops ##
// #################

// Log 1 to 10
var num = 0;

while (num <= 10) {
  console.log(num);
  num++;
};

// Add 1 to 10
var sum = 0;
var i = 0;

while (i < 10) {
  sum += i;
  i++;
}

console.log(sum);

// Loop through an array
var randomStuff = [
  "apple", 3.1416, 23456, true, false,
  undefined, ["cat", "dog", "bird"], "lastobject",
];

var x = 0;

while (x < randomStuff.length) {
  console.log(randomStuff[x]);
  x++;
}

// Reverse loop through an array
var otherStuff = [
  "apple", 3.1416, 23456, true, false,
  undefined, ["cat", "dog", "bird"], "lastobject",
];

var y = otherStuff.length - 1;

while (y >= 0) {
  console.log(randomStuff[y]);
  y--;
}


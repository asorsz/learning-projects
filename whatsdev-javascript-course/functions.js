// ###############
// ## Functions ##
// ###############

// function definition
function catGreeter() {
  console.log("Hey cat! You are a fine animal!");
  console.log("Meooooooowwww")
}

// run/call/invoke/execute function
catGreeter();

// function definintion with parameter
function specialGreeter(name) {
  console.log("Hey " + name + "! You have a cool attitude.")
}

// call function by providing arguments
specialGreeter("Joe");

// function definition with multiple parameters
function adder(a, b, c, d) {
  console.log(a + b + c + d);
}

// call function with multiple arguments
adder(2, 3, 2, 4);

// function using an array parameter
function printerArray(animals) {
  for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
  }
}
// call function using an array as argument
printerArray(["cat", "kangaroo", "dog", "spider"]);


// function using return to provide output
function addAgain(num1, num2) {
  return num1+ num2;
}

// call function and log output
console.log(addAgain(2, 4));

// set variable based on function output and log variable
var result = addAgain(2, 5);
console.log(result);

// loop in a function to check conditions
function doesExist(nums, num) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === num) {
      return true;
    }
  }
  return false;
}
console.log(doesExist([1, 3, 5, 7], 6));
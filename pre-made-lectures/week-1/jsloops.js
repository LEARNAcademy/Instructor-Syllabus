// ***Iteration!****************************************************************

// ***Anatomy!******************************************************************
// a loop will run until a certain condition becomes false.

for(let currentNum = 0; currentNum < 11; currentNum++) {
  console.log(currentNum);
}

// JavaScript has many types of loops including:
// For
// For/In
// While
// Do/While
// ForEach
// and More

// ***For Loop******************************************************************
// Anatomy of a for loop :
// Where the count (index) starts
// How many iterations we want the loop to go through
// What to do after each loop

for(let i = 0; i < 5; i++) {
    console.log(i)
}

for(let i = 10; i > 0; i--) {
    console.log(i)
}

// For loops are used when you'd like to do something to each element of an array
// Loop through and array of numbers and return each number multiplied by 3.
var arr = [5, 3, 2, 9, 8]


// So, what's going on in the above example?

// You can also use conditions in an array to "filter" your results
// Write a for loop that logs all numbers except 5
var arr = [5, 3, 5, 2, 5, 7]


// INDENTATION

// ***Scope*********************************************************************
// Global & Local
// Loops use "let"

var nums = [3, 57, -9, 20, 67]

for(let i = 0; i < nums.length; i++) {
  console.log(nums[i] % 2);
}


// ***Infinite loops!***********************************************************

for(let i = 1; i > 0; i++) {
  console.log(i);
}

// ***Looping the other direction!**********************************************

for(let i = 10; i >= 0; i--) {
  console.log(i);
}

// ***Looping through arrays!***************************************************

var nums = [3, 7, 23, 5, 18]

for(let i = nums.length - 1; i >= 0; i--) {
  console.log(nums[i] * 4);
}

// ***Filtering an array!*******************************************************

var names = ["Rachael", "Sarah", "Bryan", "Chelsea"]

for(let i = 1; i < names.length; i++) {
  if(names[i].includes("l")) {
    console.log(names[i]);
  }
}

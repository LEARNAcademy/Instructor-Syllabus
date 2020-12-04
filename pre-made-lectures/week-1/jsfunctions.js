// const
// function declaration
// arrow function (fat arrow)
const sayHello = () => {
  // return
  // console. log() is a function used to print information to the console. Return passes a value back up to where the call was made. Return is the final result of a function
  return "Hello there!"
}
// function call/invocation
console.log(sayHello());

// arguments
const doMath = (num1, num2) => {
  return num1 + num2
}
console.log(doMath(1, " charlie"));

const greeter = (name) => {
  return `Hey, ${ name }. How are you today?`
}
console.log(greeter("Erica"));
console.log(greeter("Cindy"));
console.log(greeter(1));

// pseudocode!!
// Write a function that takes in two names and returns the longer name.

// declare a function that takes in 2 arguments
const longerName = (name1, name2) => {
  // check to see the lengths of each argument using an if/else statement
  if("Rachael".length > "Ricky".length) {
    return name1
  } else {
    // return the larger word
    return name2
  }
}
// call my funciton with multiple test cases
console.log(longerName("Ricky", "Rachael"));

// other types of functions (older syntax you may see)
function greeter(name) {
  return `Hey, ${ name }. How are you today?`
}
console.log(greeter("David"));

// ******FUNCTIONS LOOPS ARRAYS*********************

// create a function that takes an array of words and returns those that start with "A"
var wordArray = ["Beans", "Apple", "Cat", "Alien", "Door"]

// name/declare our function
const findTheAs = (banana) => {
  // create a new, empty array to store "A" words
  let arrayOfAs = []
  // create a loop to look through my array
  for(let i=0; i < banana.length; i++) {
    // find the first letter of each word using .charAt(0)
    // use a conditional statement to check if that word starts with "A"
    if(banana[i].charAt(0) === "A") {
      // push the "A" word into the new array
      arrayOfAs.push(banana[i])
    }
  }
  // return the array
  return arrayOfAs
}
// function call
console.log(findTheAs(wordArray));

// Higher-order functions are functions that either takes in another function as an argument or return another function as an output.

// We will focus on two higher-order functions for this lesson - .map() and .filter()
// Both have three potential expected arguments: the value, index, and array.
// the order in which you place these arguments is pretty specific, and should be in that order: value, index, and array (if you decide to use more than just value). Not all examples of map and filter will require the use of all 3 potential arguments, but all will at least require "value," which is very convenient because it comes first.
// both map and filter will return a new array for you! for the most part, no more pushing to a new array (woohoo!)

// **********MAP********************************************

// .map is a built in function that iterates through the entire length of a given array, and returns a new array of the same length
// .map is useful when you'd like to execute some bit of logic onto each element of an array

// length of each name
var names = ["Tony", "Bo", "Grace", "Rhonda"]

// loop
for(let i = 0; i < names.length; i++) {
  console.log(names[i].length)
}

// map
const nameLengths = names.map(value => {
  return value.length
})
console.log(nameLengths)

// ...or even shorter! with arrow functions, if only one line of code needs to be executed, we dont need to drop into a new code block
const nameLengthsShorter = names.map(value => value.length)
console.log(nameLengthsShorter)

// wrap in a function to be reusable!
const nameLengthsFunction = (arr) => {
  return arr.map(value => value.length)
}
console.log(nameLengthsFunction(names));

// **********FILTER********************************************

// The .filter() function loops through an array and returns a new array with only the values that are truthy or the values that satisfy your stated condition. Filter will return a subset of the given array. Filter could potentially return an array of the same length of the original, if every value meets the condition, but likely returns a shorter array than the original.

// find words starting with "a"
var wordArray = ["Beans", "apple", "Cat", "Alien", "Door"]

// loop
const findTheAs = (array) => {
  let arrayOfAs = []
  for(let i = 0; i < array.length; i++) {
    if(array[i].charAt(0).toUpperCase() === "A") {
      arrayOfAs.push(array[i])
    }
  }
  return arrayOfAs
}
console.log(findTheAs(wordArray));

// filter
const aWordsOnly = (arr) => {
  return arr.filter(value => value.toUpperCase().charAt(0) === "A")
}
console.log(aWordsOnly(wordArray));

// create a function that will tell me the first 10 values of the sequence
var sequence = [4, 6, 7, 2, 1, 90, 5, 44, 3, 21, 5, 9, 8, 65]

// declare a function that takes an array as an argument
const first10 = (arr) => {
  // return a higher order function (likely map) that will need to utilize both the value and index of each item in the array
  return arr.filter((value, index) => {
    // return the values of index 0-9
    return index < 10
  })
}
console.log(first10(sequence));

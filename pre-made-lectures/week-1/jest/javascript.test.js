// Testing is process of creating automated quality assurance for your code
// Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase
// Jest was created by Facebook and used by Twitter, Spotify, and Airbnb

// $ yarn add jest
// write test
// $ yarn jest

// TDD: smaller problems are easier to solve

// testing sets you apart from the competition!
// its like pseudocode on steriods! plan ahead! know what you are going to do before you do it!

// describe() - Jest uses a method called describe() that runs other nested methods
// test() - test() takes a argument of a statement that explains in regular words what the test is doing
// expect() - this method calls the function being tested, passes any test-case arguments, and compares the output

// ***Examples!*****************************************************************
// Don't forget pseudocode!
// 1. Write a function called quarantineBuddy that returns "How are you feeling today?"

describe("quarantineBuddy", () => {
  test("will ask the user how they are feeling", () => {
    expect(quarantineBuddy()).toEqual("How are you feeling today?")
  })
})

const quarantineBuddy = () => {
  return "How are you feeling today?"
}


// 2. Write a function called multBy3 that takes in a number and multiplies that number by 3

// create a describe statement that refers to the name of my func
describe("multBy3", () => {
  // create a test statement that tells me what my expected output will be
  test("will return the value of a number multiplied by 3", () => {
    // create an expect statement that calls my func with an argument
    expect(multBy3(5)).toEqual(15)
    expect(multBy3(2)).toEqual(6)
    expect(multBy3(10)).toEqual(30)
  })
})

const multBy3 = (num) => {
  return num * 3
}

// 3. Write a function that takes in an array of words and returns a new array consisting of each word's length. Example: ["pancake", "biscuit", "coffee", "bacon", "eggs", "hashbrowns"] returns [7, 7, 6, 5, 4, 10]

// create a describe that refers to my function
describe("wordLengths", () => {
  // create variables to use for my input and my output values
  let input = ["pancake", "biscuit", "coffee", "bacon", "eggs", "hashbrowns"]
  let output = [7, 7, 6, 5, 4, 10]
  // create my test()
  test("return an array that consists of the lengths of each word", () => {
    // create my expect()
    expect(wordLengths(input)).toEqual(output)
  })
})

// create a function that takes in an array as an argument
const wordLengths = (arr) => {
  // map through that array and return the lengths of each word
  return arr.map(value => value.length)
}

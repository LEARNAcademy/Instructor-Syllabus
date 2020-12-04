// Until now, we've only dealt with one piece of information at a time: one number, one string, one element on a page. But, often we need to group things together. For example, what if we wanted to have a list of the months of the year? We'd use an array, which is just a list of things grouped together.

// Here are a few examples of arrays assigned to variables: -
var months = ["January", "February", "March", "April", "May"]

var numbers = [17, 15, 14, 3, 5, 10]

var combined = [17, "January", 15, "February", 14, "March", 3, "April", 5, "May", 10]

// Notice that strings in an array have quotes, but numbers don't need them.
//
// The anatomy of an array consists of the following characteristics:
//
// Brackets [ ] with a comma in between each item, value in between each commma, and a hidden index that exists behind each value
//
// In JS, index starts at 0
var letters = ["l", "e", "a", "r", "n", " ", "S", "D"]
// What letter is at index 2? ^^^

// **************************Accessing Elements*********************************
// console.log(letters[3])
// console.log(letters[7])
// console.log(letters[8])

// ****Changing Elements****
letters[2] = "SEE"
// console.log(letters);
letters[4] = 100
// console.log(letters);

// *************************Built-in Methods************************************
// .length gives you the length of an array (a read only property, not a function).
var array1 = [1, 7, 10, 9, 3, 4, 2]
// console.log(array1.length);

// Mutators - also know as "setters" - methods that change the original array.
// .push() - pushes a value into the end of an array
// .pop() - removes and returns the last value in an array
// .shift() - removes the first value in an array
// .unshift(value) - adds a new element to the beginning of an array
// .reverse() - reverses the order of the values in an array

var colors = ["red", "green", "blue"]
colors.push("black", "teal")
// console.log(colors)

colors.pop()
// console.log(colors)

colors.shift()
// console.log(colors)

colors.unshift("magenta")
// console.log(colors)

colors.reverse()
// console.log(colors)

// Accessors - also known as "getters" - methods that access an array and do not change the original array.
// .concat() - merges two or more arrays to form one combined array
// .join("") - converts all values in an array to a string
// .indexOf() - gives the index of a given value
// .lastIndexOf() - gives us the last index of a value (usually used when there are values that are the same)

var letters = ["m", "o", "n"]
var letters2 = ["d", "a", "y"]
// console.log(letters.concat(letters2))

// Notice that we get the output that we want. But, because .concat() is an accessor method, we need a way to store our combined array later in our program. We do this by setting it to a variable.
var combined = letters.concat(letters2)
// console.log(combined)

var joined = combined.join("")
// console.log(joined);

// var monday = ["monday", "tuesday"]
// console.log(monday.join(" "));
// .join
// .split

var notJoined = joined.split("")
// console.log(notJoined);

var arr1 = ["S", 2, "y", 3, "y", 1, "t" ]
// console.log(arr1.indexOf("y"))
// console.log(arr1.lastIndexOf("y"));

// *************************Array Destructuring*********************************
// Unpack the values of an array into individual variables. Not immediately useful but destructuring will make your lives a lot easier in programming so it's important to be familiar with it.
var [firstVal, secondVal] = [1, 2]
// console.log(firstVal);
// console.log(secondVal);

// https://github.com/learn-academy-2020-alpha/Syllabus/blob/master/javascript/arrays.md

// console.log();

// *************** Primitive Data Types ****************************************
// - Number
// - String
// - Boolean
// - Undefined
// - Null
// - Symbol

//*************** Numbers ******************************************************
4
9.3 // float
-10

// type a number, number is spit back out
// basic math
4 + 100
40 - 6
76 * 2
9 / 3
// Modulo or "mod"
9 % 3
// JS follows the order of operations
7 * (8 + 11) - 3


//*************** Strings ******************************************************
"Salt and Pepper Kettle Chips"
"Hello world"
"100"

// single of double quotes
"Double"
'Single'

// concatenation (returns a single string)
"I made" + " a sentence!"
// escaping out of the quotes in a string
// "My mother said "do you want meatloaf?""
"My mother said \"do you want meatloaf?\" "


//*************** Booleans *****************************************************
True
False

// result of a query or comparison, etc.
// = vs == or ===
//  strict vs loose equality
4 == 4
7 == 4
"4" == 4
"4" === 4
// Bang operator
"4" !== 4

// Null and Undefined
null
undefined


// *************** Variables ***************************************************
// Variables are like a piece of tupperware ...
var catName = "Raisins"
var age = 3
var isCute = true
"Have you met " + catName + "?"
`Have you met ${catName}?`
// String interpolation. Same end result of concatenation, but less syntax in the end.
`In 5 years, she will be ${( age + 5 )}`
// Rather than...
"In 5 years, she will be " + (age + 5)
// reassign variables (putting something else in the same tupperware)
var isCute = false

// DATA TYPES - VARIABLE MINI CHALLENGES

// ************** Built-in methods *********************************************
// Parentheses are a call to action ()
// lots of things can be executed in your code with a single call to action
alert("Hi!")
prompt("how old are you?")
"Raisins".charAt(5) // "n"
"Raisins".length() // 7
"Raisins".includes("sins") // true

// ************** Comparison Operators *****************************************
// equality operator
true == false // false
3 == "3" // true

// strict comparison
true === false // false
3 === "3" // false

// ************** Relational Operators *****************************************
// greater than
2 > 0 // true

// less than
4 < 8 // true

// greater than or equal to
0 >= 2 // false

// less than or equal to
-4 <= 0.8 // true

// ************** Logical Operators ********************************************
// and
true && false // false
true && true // true

// or
true  || false // true
false || false // false

// not
!true // false
!false // true
true != false // true
true != true // false
!(true && false) // true
!(true && false) // true

// ************** Undefined ****************************************************
// If a variable is created but not assigned a value, the variable is undefined.

// ************** Null *********************************************************
// Null is equal to nothing else in your program. It is not zero, it is not false, it is nothing.

// We also have symbols, but we will touch on those later in the course

// ************** Type Coercion ************************************************
// Because JavaScript is a loosely typed language, it does a funky thing called type coercion. If we combine data from different types, JavaScript tries to be helpful and make sense of the operation. This can lead to strange and unpredictable behavior and is generally best to avoid.

"2" + 2 // "22"
!3 // false
!0 // true
true * 9 // 9
false * 9 // 0


// ************** Conditionals *************************************************
// here at the supermarket, we have special coupons that expire within the first week of every month. you are tasked with creating a program that will tell a user if the coupon is still valid, expires today, or is expired.

var coupon = "11/03/2020"
var today = "11/01/2020"
var couponDay = coupon.charAt(4)
var todayDay = today.charAt(4)

if(couponDay === todayDay) {
  console.log("today is the last day to use the coupon!")
} else if(couponDay > todayDay) {
  console.log(`you still have time to use this coupon, but it expires on ${coupon.substr(0, 5)}`)
} else if(couponDay < todayDay) {
  console.log("this coupon is expired")
} else {
  console.log("something went wrong")
}




















//

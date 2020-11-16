# White Board Exercises

We introduce white boarding during the second week of the class.

- [ Intro to White Boarding ](./intro-to-whiteboarding.md#white-boarding)
- [ Week 2: JavaScript ](#week-2-intro-to-javascript)
- [ Week 3: JavaScript and React ](#week-3-javascript-and-react)
- [ Week 4: Ruby ](#week-4-ruby)
- [ Week 5: SQL and Rails ](#week-5-sql-and-rails)
- [ Week 6: Full-stack Rails ](#week-6-full-stack-rails)
- [ Week 7: PD Week Technical Interviews ](./pd-week-tech-interviews.md/#pd-week-technical-interviews)
- [ Week 8: Cat Tinder ](#week-8-cat-tinder)
- [ Great Resource ](https://www.interviewcake.com/coding-interview-tips) for technical interviews

### Week 2: Intro to JavaScript

**Student 1**  
TECH QUESTIONS:  
1) What excites you about coding?  
2) What is the difference between an array's value and index? As a developer, why is it important to distinguish between the two?  
3) What is iteration?

CODE PROMPT:  
As a developer, you are given an array of mixed data. Create a function that takes the array and returns an array with only the the values that that are strings.

INSTRUCTOR'S NOTES:
```javascript
let testArray = [3, 4, 5, true, false, true, "hello", "hey", "yo"]

const filterArray = (array) => {
  // can use filter and typeof "string"
}
console.log(filterArray(testArray, "string"))
// Output: ["hello", "hey", "yo"]
```

**Student 2:**  
TECH QUESTIONS:  
1) What drew you to learn development?  
2) What is a higher-order function? Can you give me three examples of higher-order functions?  
3) How is a higher-order function different from an arrow function?

CODE PROMPT:  
As a developer, you are given an array of english words. Create a function that returns an array with all the words in uppercase letters.

INSTRUCTOR'S NOTES:
```javascript
let arrayOfWOrds = ["i", "am", "so", "excited"]

const makeEmCaps = (array) => {
  // can use map and .toUpperCase
}
console.log(makeEmCaps(arrayOfWOrds))
// Output: ["I", "AM", "SO", "EXCITED"]
```

[ Back to the Top ](#white-board-exercises)

### Week 3: JavaScript and React

**Student 1:**  
TECH QUESTIONS:  
1) What are your strengths as a developer?  
2) What is the difference between git and GitHub?  
3) What is a branch?  

PROMPT:  
As a developer you are tasked with calculating some information for a farmer. The farmer has chickens (2 legs), goats (4 legs) and horses (4 legs). Create a function that returns the total number of legs on the farm.

INSTRUCTOR'S NOTES:
```javascript
const totalLegs = (chicks, goats, horses) => chicks*2 + goats*4 + horses*4
// Most people will overthink this one!
console.log(totalLegs(5, 6, 3))
```

**Student 2:**  
TECH QUESTIONS:  
1) What are your weaknesses as a developer?  
2) What is the difference between null, undefined, false, NaN?  
3) Compare and contrast arrays and objects.  

PROMPT:  
A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order. Create a function that takes in an array of names and returns the name of the secret society. (Optional stretch: The secret society's name should be entirely uppercased.)

INSTRUCTOR'S NOTES:
```javascript
// Null, undefined, false, NaN are all falsey values, NaN is of type "number"

secretSociety = (array) => {
  // can pass an array or individual names
  // can use substring, charAt, [0], etc
  // note that .sort() will treat lower and uppercase letters differently
}
console.log(secretSociety(["rachael", "sarah", "andee"]))
--> "ars"
--> "ARS" (stretch)
```

[ Back to the Top ](#white-board-exercises)

### Week 4: Ruby

**Student 1:**  
TECH QUESTIONS:  
1) What text editor do you use and why?  
2) Compare and contrast equality operators in JavaScript and Ruby.  
3) Do all dynamically-typed languages support type coersion?  

PROMPT:  
As a developer, you are given a string containing multiple words. Create a function that capitalizes all the words in the string. (Can be done in JS or Ruby)

INSTRUCTOR'S NOTES:
```javascript
const capitalizer = (string) => {
  // split string, map
  // get first value with charAt or [0] and apply toUpperCase
  // add the rest of the word with substring or splice
  // join
}
console.log(capitalizer("hey there learn student"))
--> 'Hey There Learn Student'
```
```ruby
def capitalizer string
  # split, map
  # capitalize method
  # join
end
puts capitalizer 'hey there learn student'
--> 'Hey There Learn Student'
```

**Student 2:**  
TECH QUESTIONS:  
1) What operating system do you use and why?  
2) Compare and contrast floats in JavaScript and Ruby. (Optional stretch: What do you get when you divide 0/0 in each language?)  
3) What is the difference between a function and a method? Does the distinction matter?  

PROMPT:  
As a developer, you are given a multi digit number. Write a function that takes the number and returns an array with a single integer at each index. (Can be done in JavaScript or Ruby)

INSTRUCTOR'S NOTES:
```javascript
console.log(0/0)
--> NaN

// the main challenge is tracking data types and knowing which methods can be applied to which data types
const splitNum = (number) => {
  return number.toString().split("").map(value => {
    return parseInt(value)
  })
}


--> [3, 4, 8, 3, 2]
```
```ruby
p 0/0
--> ZeroDivisionError
p 0.0/0
--> NaN

def split_nums number
  num.to_s.split("").map do |value|
    value.to_i
  end
end
puts split_nums 34567
--> [3, 4, 5, 6, 7]
```

[ Back to the Top ](#white-board-exercises)

### Week 5: SQL and Rails

**Student 1:**  
TECH QUESTIONS:  
1) When working in a group, what role do you find yourself naturally gravitate towards?  
2) What is a relational database?  
3) What is an aggregate function in SQL?  

PROMPT:  
(Part 1) As a developer, you have been tasked with creating a database for your client who sells giant cookies online. What columns would you recommend to your client to have in the cookie table? (Open to interpretation - just an exercise in thinking through a problem. Optional stretch: What data type would each column have?)

(Part 2) Write a SQL query that will return the type and price of the most expensive cookie in the database.

INSTRUCTOR'S NOTES:  
Possible columns include type of cookie, price, size, cost of materials, calories, delivery date, delivery location, special instructions... The goal is to get them asking questions and doing some creative thinking.
```sql
SELECT type of cookie, price
FROM cookie
ORDER BY price DESC
LIMIT 1
```

**Student 2:**  
TECH QUESTIONS:  
1) Do you consider your personality more outgoing or more reserved?  
2) What is a schema?  
3) What is the purpose of an ORM?  

PROMPT:  
(Part 1) As a developer, you have been tasked with creating a database for your client who works in the mail room of a large office building and needs an app to notify people when they receive mail. What columns would you recommend to your client to have in the mail table? (Open to interpretation - just an exercise in thinking through a problem. Optional stretch: What data type would each column have?)

(Part 2) Write an Active Record statement to be executed in the Rails console that will update the office suite/number of one instance in the Mail table.

INSTRUCTOR'S NOTES:  
Possible columns include office suite/number, addressee, type of mail (letter vs package), date arrived, office contact information, did the mail need to be signed for... The goal is to get them asking questions and doing some creative thinking.

```ruby
letter = Mail.find <id>
letter.office_suite = "12C"
letter.save
```

[ Back to the Top ](#white-board-exercises)

### Week 6: Full-stack Rails

**Student 1:**  
TECH QUESTIONS:  
1) What makes you a good teammate?  
2) What is the difference between a JavaScript function using the keyword function and a function using the fat arrow syntax?  
3) How would you determine if a number is prime?

PROMPT:  
Write a function that takes in a string and checks if the string is a palindrome. (Can be done in JavaScript or Ruby)

INSTRUCTOR'S NOTES:
```javascript
const palindrome = (string) => {
  if(string === string.toLowerCase().split("").reverse().join("")){
    return `${string} is a palindrome!`
  } else {
    return `${string} is NOT a palindrome!`
  }
}
```

**Student 2:**  
TECH QUESTION:  
1) What do you value in a mentor?  
2) What is a stack overflow?  
3) What would you get if you add the string "hello" to the number 3? (In JavaScript vs Ruby?)

PROMPT:  
Create a function that takes in a string with multiple words and returns a string with the letters in each word reversed. The words should remain in the same order. (Can be done in JavaScript or Ruby)

INSTRUCTOR'S NOTES:  
```javascript
console.log("hello" + 3)
--> "hello3"

const reverser = (string) => {
  return string.split(" ").map(value => {
    return value.split("").reverse().join("")
  }).join(" ")
}

console.log(reverser("oh hey there you"))

--> "ho yeh ereht uoy"
```
```ruby
p 'hello' + 3
--> TypeError

def reverser string
  reversed_array = string.split(' ').map do |value|
    value.reverse
  end
  reversed_array.join(' ')
end

p reverser 'oh hey there you'

--> "ho yeh ereht uoy"
```

[ Back to the Top ](#white-board-exercises)

### Week 8: Cat Tinder

**Student 1:**    
TECH QUESTION:  
1) Tell me about something you enjoy doing outside of coding.   
2) What does the term asynchronous mean in programming?  
3) What is a Promise? What are the possible states of a Promise?


PROMPT:  
What is this code doing?
```javascript
markTask = (e) => {
  let task = this.state.batch.tasks.find(v => v.id === e.target.id)
  markTaskDone(task)
  this.props.completeTask(task)
}
```

INSTRUCTOR'S NOTES:  
The markTask function is finding one task from the state object by an id that is coming from an input of some kind, then passing task to a local method and a method in the parent component.   

**Student 2:**  
TECH QUESTION:  
1) Tell me about a project you are working on.    
2) What is the Virtual DOM?
3) What is a recursive function? How would you avoid an infinite loop in a recursive function?

PROMPT:   
What is this code doing?
```javascript
cards = (array) => {
  array.sort(() => Math.random() - 0.5)
  this.setState({ flashcards: array })
}
```

INSTRUCTOR'S NOTES:   
The cards function is shuffling an array based on the random number being positive or negative.

[ Back to the Top ](#white-board-exercises)

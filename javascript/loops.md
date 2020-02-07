# JavaScript Loops

[![YouTube](http://img.youtube.com/vi/4PcRcvgIXNk/0.jpg)](https://www.youtube.com/watch?v=4PcRcvgIXNk)


The for statement creates a loop that is executed as long as a condition is true. The loop will continue to run as long as the condition is true. It will only stop when the condition becomes false.

JavaScript has many types of loops including:

* [For](https://www.w3schools.com/js/js_loop_for.asp)
* [For/In](https://www.w3schools.com/js/js_loop_for.asp)
* [While](https://www.w3schools.com/js/js_loop_while.asp)
* [Do/While](https://www.w3schools.com/js/js_loop_while.asp)
* [ForEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* and More

For now, we are going to focus on breaking down the `for loop`.

#### For Loop

This is the most common type of loop you will see used in JavaScript. It gives you the most control over how you are iterating over items by letting you define:

1. Where the count (index) starts
2. How many iterations we want the loop to go through
3. What to do after each loop


Can you guess what this loop will do?

```JavaScript
for(let i=0; i<5; i++){
    console.log(i)
}
```

How about this loop...

```JavaScript
for(let i=10; i>0; i--){
    console.log(i)
}
```

For loops are especially helpful when we want to iterate through an array and do something to each element.

```javascript
//loop through and array of numbers and return each number multiplied by 3.

var arr = [5, 3, 2, 9, 8]

for(let i=0; i<arr.length; i++){
    console.log(arr[i] * 3);
}
```

So, what's going on in the above example?  During each loop the array[i] is being replaced with..

arr[0] which becomes 5 * 3

arr[1] which becomes 3 * 3

arr[2] which becomes 2 * 3

etc.

We can also 'filter' an array based on certain conditions (if / else statements)

```JavaScript
//write a for loop that logs all numbers except 5
//expected output [3, 2, 7]

var arr = [5, 3, 5, 2, 5, 7]

for(let i=0; i<arr.length; i++){
  if(arr[i] !== 5){
    console.log(arr[i])
  }      
}
```

Notice the indentation in the above example. This helps us to see if we have closed all of our open curly brackets.  We can see that the first closing curly closes our if/else statement, and the last closing curly closes our for loop.


## Scope - var/let/const

**Scope** refers to where a variable is accessible or visible. The two main types of scope are:

- **Global** - variables that can be seen and used anywhere in the program.

- **Local** - also know as lexical or block scope. Variables in local scope can only be used within the block/function/loop that it is assigned.

Notice that in our loops we use `let` to assign `i` or `index` to a starting value. In the most recent updates to JavaScript (ES6) `let` and `const` were added to deal with scoping issues.  Prior to this, `var` was the only way to assign variables which were always global and sometimes caused problems. Now we have:

- **var** - puts the variable in global scope and may or may not be reassigned.  

- **let** - this means that the variable will only be used in the block in which it is defined. This also means that this variable could be reassigned elsewhere in your program.

- **const** - this means that the variable will not be reassigned.



## Challenges

1. Write a for loop that logs each number from 1 - 20.

2. Write a for loop that logs the result of each number from 1 - 20 tripled.

3. Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD"

  Expected output -->> ODD, 2, ODD, 4, ODD, 6 ...etc

4. **Consider this variable:**

  var nums = [3, 57, -9, 20, 67]

* Create a loop that will log the highest number from the array

  Expected output -->> 67

* Create a loop that will log the lowest number from the array

  Expected output -->> -9

* Create a loop that will log the remainder of each number when divided by 2

  Expected output -->> 1, 1, -1, 0, 1

5. **Consider this variable:**

  var myString = "learn student"

* Write the code that will log the number of times the letter "e" occurs in the string

  Expected output -->> 2

### STRETCH Challenges

1. **Odd or Even**

  Write a for loop that iterates from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

  Expected output -->> "0 is even" "1 is odd" "2 is even" ...etc


2. **Fizz Buzz**

  Use a for loop to log all numbers from 1-100.  If a number is a multiple of 3, replace it with the word `fizz`. If a number is a multiple of five, replace it with the word `buzz`. If a number is a multiple of both 3 and 5, replace it with `fizzbuzz`.

  Expected output -->> 1, 2, "fizz", 4, "buzz", 6, 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc


[Go to next lesson: JavaScript Functions](./functions.md)

[Back to JavaScript Arrays](./arrays.md)

[Back to Syllabus](../README.md)

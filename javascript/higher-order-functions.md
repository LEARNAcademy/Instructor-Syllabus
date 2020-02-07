# JavaScript Higher-Order Functions

[![YouTube](http://img.youtube.com/vi/nIDcPIr94bk/0.jpg)](https://www.youtube.com/watch?v=nIDcPIr94bk)


A higher-order function is simply a function that either takes in another function as an argument or returns another function.

We will focus on two higher-order functions for this lesson -
**.map()** and **.filter()** both have three built-in arguments - the value, index, and array.

* .map(value, index, array)
* .filter(value, index, array)


1. The **value** at each index of an array

2.  The **index** of the array that we are looping through   

3.  The **array** that map was called on


## .map()

The .map() function iterates through an array and returns a new array of the same length.

Here is an example of iterating using a for loop:

```JavaScript
var arr = [5, 3, 2, 9, 8]

for(let i=0; i<arr.length; i++){
    console.log(arr[i] * 3)
}
```

Now let's look at this same objective with .map()

```JavaScript
var arr = [5, 3, 2, 9, 8]

var newArr = arr.map(function(value){
    return value * 3
})

console.log(newArr)
```

And using arrow functions we can reduce the code even further.

```JavaScript
var arr = [5, 3, 2, 9, 8]

var newArr = arr.map(value => value * 3)

console.log(newArr)
```

And finally let's put all that together in a function that can take in any array.

```JavaScript
var arr = [5, 3, 2, 9, 8]

mult3 = (array) => {
  let newArr = array.map(value => value * 3)
  return newArr
    }
console.log(mult3(arr))
```
Notice that .map() loops through the specified array AND pushes the updated values into a new array.

## .filter()

The .filter() function loops through an array and returns a new array with only the values that are **truthy** or the values that satisfy your stated condition. Filter will return a subset of the given array.

Here is an example of iterating and returning a subset using a for loop:

```JavaScript
var arr1 = [1, 2, 7, 4, 10, 8, 9]
function only_even(array){
  let newArr = []
  for(let i=0; i<array.length; i++){
    if(array[i] % 2 === 0){
      newArr.push(array[i])
    }
  }
  return newArr
}

console.log(only_even(arr1));
```

So, in the above example, we have created a function that takes an array as an argument, loops through the array, and returns a new array containing only the even numbers.

#### Using .filter()

```JavaScript
var arr = [1, 2, 7, 4, 10, 8, 9]

only_even = (array) => {
  let newArr = array.filter(value => value % 2 === 0)
  return newArr
}

console.log(only_even(arr));

```

## .map() vs .filter()

When deciding which higher-order function to use, remember that .map() will do something to each item in an array and return the same number of items.  Whereas .filter() will return a new, smaller array `filtered` based on your specified criteria.

## Challenges

**DON'T FORGET TO PSEUDO CODE**

Use .map() or .filter() to complete the following exercises:

1. Write a function that takes in an array and returns a new array with all numbers multiplied by 10.

  var arr1 = [3, 9, 15, 4, 10]

  Expected output -->> [30, 90, 150, 40, 100]

2. Write a function that takes in an array and returns a new array with only odd numbers.

  var arr2 = [2, 7, 3, 5, 8, 10, 13]

  Expected output -->> [7, 3, 5, 13]

3. Write a function that takes in an array of numbers and letters and returns a string with only the letters. **HINT:** Use typeof method

  var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
  Expected output -->> "nicework"

### STRETCH Challenges

1. Create a function that takes in a string and returns a new string with all the vowels removed.

  var str = "javascript is awesome"

  Expected output -->> "jvscrpt s wsm"

2. Create a function that takes in two arrays as arguments returns one array with no duplicate values.

  var arr1 = [3, 7, 10, 5, 4, 3]

  var arr2 = [7, 8, 2, 1, 5, 4]

  Expected output -> [3, 7, 10, 5, 4, 8, 2, 1]

[Go to next lesson: JavaScript Testing with Jest](./jest.md)

[Back to JavaScript Functions, Loops, and Arrays](./functions-loops-arrays.md)

[Back to Syllabus](../README.md)

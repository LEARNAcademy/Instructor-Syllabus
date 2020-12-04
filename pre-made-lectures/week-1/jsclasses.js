// objects!!
// key value pairs
myObj = {
  name: "Louie",
  age: 33
}

// if i wanted to create a bunch of objects that all have a name and age key, it would require me to make the object above, over and over again.
// THAT'S ANNOYING

// what if we had a blueprint that we could utilize to create a bunch of objects with "name" and "age" ?

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

// Classes are a particular type of function that contain data and behavior. Classes are the blueprints of objects. Classes are the IDEA of a thing, while the new instances of that class are the ACTUAL thing

// Just like functions, classes have their own scope.


// basic cyntax of a class:
// constructor: a special method for creating and initializing objects
// this: a JavaScript keyword that refers to the object it belongs to
// new: used when creating a new instance of a class (an object)

// things to remember:
// Class names are always capitalized
// Class names are PascalCased (like camelCase, but the first word is capitalized)
// Instance of classes (objects) are always lowercase

class Test {
  test() {
    console.log("test");
  }
}

practice = new Test()
practice.test()

// class capitalized
class Hamburger {
  // constructor initializes all new instances of Hamburger to have 1 patty
  // AKA, every time we create a new object with the key:values of patties: NUMBER, it will look like patties: 1
  constructor() {
    this.patties = 1
    this.cheese = 0
  }

  // will add a patty to "this.patties" above
  addPatty() {
    this.patties += 1
  }

  // will add a patty to "this.patties" above
  addCheese() {
    this.cheese += 1
  }
}

var doubleCheeseBurger = new Hamburger()
doubleCheeseBurger.addPatty()
doubleCheeseBurger.addCheese()
doubleCheeseBurger.addCheese()
console.log(doubleCheeseBurger.patties);
console.log(doubleCheeseBurger.cheese);


// classes are reusable! we can make all kinds of hamburgers

// since classes are blueprints for objects, once we have created a new instance of that object, it can be used like any regular object! If we create a new instance of Hamburger, think of that new instance as a literal hamburger that we can now interact with. Since it is a real, actual hamburger now, it can be added to an array, it can be mapp through, etc.

// array
var hammies = []
hammies.push(new Hamburger())
hammies.push(new Hamburger())
console.log(hammies);

// .map
hammies.map((value, index) => {
  console.log(`The burger at index ${index} has ${value.cheese} slice/s of cheese.`)
})

// classes constructors can store any data type, including arrays
class Yelper {
  constructor() {
    this.reviews = []
  }

  add1StarReview() {
    this.reviews.push("1")
  }

  add2StarReview() {
    this.reviews.push("2")
  }

  add3StarReview() {
    this.reviews.push("3")
  }
}

var person1 = new Yelper()
person1.add1StarReview()
person1.add1StarReview()
person1.add1StarReview()
person1.add1StarReview()
console.log(person1.reviews);

// constructors can also take arguments if you want initiailzed data to be more unique

class {
  constructor(name, age){
    this.name = name
    this.age = age
  }

  description(){
    return `${this.name} is a ${this.age} year old dog.`
  }
}
// now when creating the new object, the constructor method is expecting two arguments: a name and an age
var rover = new Dog('Rover', 4)
console.log(rover.description())
--> "Rover is a 4 year old dog."

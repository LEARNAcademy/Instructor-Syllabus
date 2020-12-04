class Food {
  constructor() {
    this.amountLeft = 100
  }

  takeSmallBite() {
    this.amountLeft -= 10
    return `You have ${ this.amountLeft }% to eat`
  }

  takeBigBite() {
    this.amountLeft -= 25
    return `You have ${ this.amountLeft }% to eat`
  }
}

class Cereal extends Food {
  constructor() {
    super()
    this.calories = 300
  }

  finishFood() {
    if(this.amountLeft !== 0) {
      this.amountLeft = 0
    }
    return `There is ${ this.amountLeft } cereal left. You consumed ${ this.calories } calories.`
  }
}

var fruitLoops = new Cereal()
console.log(fruitLoops.takeSmallBite())
console.log(fruitLoops.takeBigBite())
console.log(fruitLoops.finishFood())

class Burrito extends Food {
  constructor() {
    super()
    this.calories = 700
    this.ingredients = ["tortilla", "beans"]
  }
}

var californiaBurrito = new Burrito()
console.log(californiaBurrito.takeBigBite());
console.log(californiaBurrito.takeBigBite());
console.log(californiaBurrito.takeBigBite());

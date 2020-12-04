var person = {
  firstName: "Arthur",
  lastName: "Dent"
}
person.homePlanet = "Earth"
var { firstName, lastName, homePlanet } = person
// console.log(`${firstName} ${lastName} is from planet ${homePlanet}`);




var product = {
  name: "chair",
  price: 14.99
}
var { name, price } = product
describeProduct = (item) => {
  return `The product is a ${name}. It costs $${price}`
}
// console.log(describeProduct(product));




var lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
}
var { name, type, ingredients } = lunch
// console.log(ingredients);
// console.log(ingredients[2]);
sandwichStuff = (lunch) => {
  return `The ingredients for a ${name} ${type} are ${ingredients[0]}, ${ingredients[1]},  ${ingredients[2]}, and ${ingredients[3]}.`
}
// console.log(sandwichStuff(lunch));




var animals = [
  { name: "Waffles", type: "dog", age: 12 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 },
]
var cats = animals.filter(value => value.type === "cat")
var names = animals.map(value => value.name)
// console.log(cats);
// console.log(names);




let author = {
    name: "H. G. Wells",
    genre: "science fiction"
}
var { name, genre } = author
console.log(`${name} is a ${genre} author`)




let pokeOne = {
    species: "Charmandar",
    pokemon_type: "Fire"
}
let pokeTwo = {
    species: "Magikarp",
    pokemon_type: "Water"
}
describePokemon = (poke) => {
  var { species, pokemon_type } = poke
  return `${species} is a ${pokemon_type} Pokemon`
}
// console.log(describePokemon(pokeOne));
// console.log(describePokemon(pokeTwo));

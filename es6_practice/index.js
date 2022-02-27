let name = "John"
let age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

// Task 1

const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }

const mapVegetables = (arr) => arr.map(carrot => ({type: "carrot", name: carrot})) 

console.log(mapVegetables(carrots))


// Task 2

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

// function filterForFriendly(arr) {
//     return arr.filter(function(person) {
//         return person.friendly
//     })
// }

const filterForFriendly = (arr) => arr.filter(person => person.friendly)

console.log(filterForFriendly(people))

// Task 3

// function doMathSum(a, b) {
//     return a + b
// }

const doMathSum = (a, b) => a + b

// var produceProduct = function(a, b) {
//     return a * b
// }

const produceProduct = (a, b) => a * b

// Task 4

const person = (firstName, lastName, age) => `Hi ${firstName || "Jane"} ${lastName || "Doe"}, how does it feel to be old as dirt..I mean to be ${age || 100}`

console.log(person())

// Task 5

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
//  function filterForDogs(arr) {
//      return arr.filter(animal => {
//          if (animal.type === "dog") {
//              return true
//          } else {
//              return false
//          }
//      })
//  }

const filterForDogs = (arr) => arr.filter(animal => animal.type === "dog")

console.log(filterForDogs(animals))

// Task 6

const greetings = (location, name) => `Hi ${name || "Janice"}

Welcome to ${location || "Hawaii"}

I Hope you enjoy your stay. Please ask the president of ${location || "Hawaii"} if you need anything.`

console.log(greetings())
const array = [10, 20, 30, 40]

let doubleArray = array.map(num => num * 2);

console.log(doubleArray)

let numToString = array.map(num => num.toString());

console.log(numToString)

const stringArray = ['John', 'James', 'Peter', 'Andrew', 'Philipp', 'Nathaniel', 'Simon', 'Thomas']

let capArray = stringArray.map(string => string.toUpperCase());

console.log(capArray)

const persons = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

let namesOnly = persons.map(person => person.name);
console.log(namesOnly)

let ageOnly = persons.map(person => {
    if (person.age >= 18) {
        console.log(`${person.name} can go to The Matrix`)
    } else {
        console.log(`${person.name} is not old enoguh`)
    }
})

let nameTagged = []
let namesInDom = persons.map(person => {
    let newArray = `<h1>${person.name}</h1><h2>${person.age}</h2>`
    nameTagged.push(newArray);
})

console.log(nameTagged)
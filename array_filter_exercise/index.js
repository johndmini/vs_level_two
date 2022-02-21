const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

let newArray = array.filter((num) => num >= 5)
console.log(newArray)

let evensOnly = []
let evenArray = array.map((num) => {
    if (num % 2 === 0) {
       evensOnly.push(num);
    }
})
console.log(evensOnly)

const stringArray = ['John', 'James', 'Peter', 'Andrew', 'Philipp', 'Nathaniel', 'Thomas', 'Matthew', 'Simon']
let fiveOrLonger = stringArray.filter((name) => name.length <= 5)
console.log(fiveOrLonger)

const illuminati = [{ name: "Angelina Jolie", member: true },
{ name: "Eric Jones", member: false },
{ name: "Paris Hilton", member: true },
{ name: "Kayne West", member: false },
{ name: "Bob Ziroll", member: true }]

let theyDontBelong = illuminati.filter((name) => name.member)
console.log(theyDontBelong)

const persons = [{ name: "Angelina Jolie", age: 80 },
{ name: "Eric Jones", age: 2 },
{ name: "Paris Hilton", age: 5 },
{ name: "Kayne West", age: 16 },
{ name: "Bob Ziroll", age: 100 }]

let oldEnough = persons.filter((person) => person.age >= 18)
console.log(oldEnough)
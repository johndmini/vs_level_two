let array = [3, 20, 1, 4, 45, 72, 63, 23, 18, 98, 8];

array.sort(function (a, b) {
    return a - b;
})
console.log(array)

array.sort(function (a, b) {
    return b - a;
})
console.log(array)

let arrayOfStrings = ['John', 'James', 'Thomas', 'Peter', 'Andrew','Magadalene', 'Philipp', 'Nathaniel', 'Matthew', 'Simon', 'Mary'];
arrayOfStrings.sort(function (a, b) {
    return a.length - b.length;
})
console.log(arrayOfStrings)


console.log(arrayOfStrings.sort())

let persons = [{ name: "Quiet Samurai", age: 22 },
{ name: "Arrogant Ambassador", age: 100 },
{ name: "Misunderstood Observer", age: 2 },
{ name: "Unlucky Swami", age: 77 }];

persons.sort(function (a, b) {
    return a.age - b.age
})
console.log(persons)
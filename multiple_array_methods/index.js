const peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

peopleArray.sort(function (a, b) {
    return a.lastName < b.lastName ? -1 : 1
})
console.log(peopleArray)

const newArray = peopleArray.reduce(function(final, current) {
    if(current.age >= 18){
        final.push(`<li>${current.firstName} ${current.lastName} is ${current.age} years old</li>`)
    }
    return final;
}, [])
console.log(newArray)




//---Extra Credit

// const newArrayTwo = peopleArray.reduce(function(final, current) {
//     if(current.lastName[current.lastName.length[-1]] === 'y' || current.lastName.length[current.lastName.length[-1]] === 'a'){
//         final.push(`${current.firstName} ${current.lastName}`)
//     }
//     return final;
// }, [])

// console.log(newArrayTwo)
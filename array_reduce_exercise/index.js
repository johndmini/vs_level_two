const numbers = [1, 2, 3, 4, 5, 6]

const sumOfArrays = numbers.reduce(function (sum, num) {
    return sum + num;
})

console.log(sumOfArrays)

const numberString = numbers.reduce(function (string, number){
    string += number
    return string;
}, '')

console.log(numberString)

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const result = voters.reduce(function (count, voter){
    if(voter.voted){
        count.didVote++
    } else {
        count.didNotVote++
    }
    return count;
}, {didVote: 0, didNotVote: 0})
console.log(result)

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]

const total = wishlist.reduce(function (final, car){
    return final + car.price
}, 0)
console.log(total)

const arrayOfArrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

const oneArray = arrayOfArrays.reduce(function (final, currentArray){
    return final.concat(currentArray)
}, [])
console.log(oneArray)

const voteCount = voters.reduce(function (final, current){
    if(current.age >=18 && current.age <= 25){
        final.youngPeople++
        if(current.voted){
            final.youngVoted++
        }
    }
    if (current.age >=26 && current.age <= 35){
        final.midPeople++
        if(current.voted){
            final.midVoted++
        }
    }
    if (current.age >= 36 && current.age <= 55){
        final.oldPeople++
        if(current.voted){
            final.oldVoted++
        }
    }
    return final;
}, {youngPeople: 0, youngVoted: 0, midPeople: 0, midVoted: 0, oldPeople: 0, oldVoted: 0})
console.log(voteCount)
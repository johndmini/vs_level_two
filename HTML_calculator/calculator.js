const add = document["add"]
const subtract = document["subtract"]
const multiply = document["multiply"]
console.log(add)

add.addEventListener("submit", function(e){
    e.preventDefault()

    let firstNumber = add.firstNumber.value;
    let secondNumber = add.secondNumber.value;
    add.firstNumber.value = ""
    add.secondNumber.value = ""
    let sum = parseInt(firstNumber) + parseInt(secondNumber);
    add.sum.value = sum
});

subtract.addEventListener("submit", function(e){
    e.preventDefault()

    let firstNumber = subtract.firstNumber.value;
    let secondNumber = subtract.secondNumber.value;
    subtract.firstNumber.value = ""
    subtract.secondNumber.value = ""
    let difference = parseInt(firstNumber) - parseInt(secondNumber);
    subtract.difference.value = difference;
});

multiply.addEventListener("submit", function(e){
    e.preventDefault()

    let firstNumber = multiply.firstNumber.value;
    let secondNumber = multiply.secondNumber.value;
    multiply.firstNumber.value = ""
    multiply.secondNumber.value = ""
    let product = parseInt(firstNumber) * parseInt(secondNumber);
    multiply.product.value = product;
})
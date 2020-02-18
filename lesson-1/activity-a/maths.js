/*

let numOne
let numTwo
let numThree

let resultAdd
let resultSum

// Randomize variables to whole integers under 10
numOne = Math.round(Math.random()*10)
numTwo = Math.round(Math.random()*10)
numThree = Math.round(Math.random()*10)

// Add 2 numbers
function add(numOne, numTwo) {
    resultAdd = numOne + numTwo
    console.log(resultAdd)
    return resultAdd
}

// Add 3 numbers
function sum(numOne, numTwo, numThree) {
    resultSum = numOne + numTwo + numThree
    console.log(resultSum)
    return resultSum
}

// Override (Random if removed)

add(10, 6)
sum(10, 5, 6)


*/

/*

let a
let b
let c
let d


a = Math.round(Math.random()*10)
b = Math.round(Math.random()*10)

*/

function add(a, b) {
    return a + b
}

function mul(a, b) {
    return a * b
}

function div(a, b) {
    c = (a / b)
    d = (a % b)
        //return parseInt(toString(c)+'.'+toString(d))
    return parseInt(c.toString() + '.' + d.toString())
}

console.log('maths.js has run')

module.exports = {
    add,
    mul,
    div
};
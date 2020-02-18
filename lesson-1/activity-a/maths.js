function add(a, b) {
    return a + b
}

function mul(a, b) {
    return a * b
}

function div(a, b) {
    c = (a / b)
    d = (a % b)
    return parseInt(c.toString() + '.' + d.toString())
}

console.log('maths.js has run')

module.exports = {
    add,
    mul,
    div
};
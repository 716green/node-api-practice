// // Node JS API Development: Page 11 (Top)

// define variable named maths and assign it to the export module from maths.js in the same folder
// The add, mul and div modules from maths.js are being imported in as a const module named maths
const request = require('request')
const fs = require('fs')
    //const maths = require('./maths'); //alternative:
const maths = { add, mul, div } = require('./maths');

request('http://www.example.com', (error, response, body) => {
    if (error) console.log('error:', error) // print error if error
    else console.log('body:', body) // print html for the site
})

// import { readFile } from 'fs' // call in file system (fs)
// define file path for sample file to be used in function below

// notate the log showing when this index module has run
console.log('index.js has run')

// not using Math.add(), this is using maths.add
console.log(maths.add(30, 20))
console.log(maths.mul(30, 20))
console.log(maths.div(30, 7))
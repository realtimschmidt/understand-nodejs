// built in file system & error-first callback

const fs = require('fs')

// synchronously read file
const greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8')
console.log(greet)

// asynchronously read file - better performance
const greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
    console.log(data)
})

// console log 'Done!' after greet2 starts but before it finishes
console.log('Done!')
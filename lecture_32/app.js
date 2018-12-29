// fundamental concepts to understanding event emitter
// object properties and methods

const obj = {
    greet: 'Hello'
}

console.log(obj.greet)
console.log(obj['greet'])
const prop = 'greet'
console.log(obj[prop])

// functions and arrays
let arr

arr = []

arr.push(() => console.log('Hello world 1'))
arr.push(() => console.log('Hello world 2'))
arr.push(function() {
    console.log('Hello world 3')
})

arr.forEach(function(item) {
    item()
})
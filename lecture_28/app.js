// using core js files
const util = require('util')

const name = 'Tim'
const greeting = util.format('Hello, %s', name)
util.log(greeting)
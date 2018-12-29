// common module patterns
const greet = require('./greet1')
greet()

const greet2 = require('./greet2').greet
greet2()

const greet3 = require('./greet3')
greet3.greet()
greet3.greeting = 'Changed hello world!'

const greet3b = require('./greet3')
greet3b.greet()

const Greet4 = require('./greet4')
const grtr = new Greet4()
grtr.greet()

const greet5 = require('./greet5').greet
greet5()
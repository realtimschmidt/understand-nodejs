// inheriting from the event emitter part 2

const util = require('util')

function Person() {
    this.firstname = 'John'
    this.lastname = 'Doe'
}

Person.prototype.greet = function() {
    console.log(`Hello ${ this.firstname } ${ this.lastname }`)
}

function Policeman() {
    Person.call(this)
    this.badgenumber = '1234'
}

util.inherits(Policeman, Person)
const officer = new Policeman()
officer.greet()
const person = {
  firstname: 'Tim',
  lastname: 'Schmidt',
  greet: function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname)
  }
}

person.greet()

console.log(person['firstname'])

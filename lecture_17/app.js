// const a = 1
// const b = 2
// const c = a + b
//
// console.log(c)

// Ledcture 17

const greet = () => console.log('hi')
greet()

const logGreeting = (fn) => fn()
logGreeting(greet)

const greetMe = () => console.log('Hi Tim')
greetMe()

logGreeting(greetMe)

logGreeting(() => console.log('Hello Tim!'))

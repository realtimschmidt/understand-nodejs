// node built in event emitter

const Emitter = require('events')
const eventConfig = require('./config').events

const emtr = new Emitter()

emtr.on(eventConfig.GREET, function() {
    console.log('Somwhere, someone said hello.')
})

emtr.on(eventConfig.GREET, function() {
    console.log('A greeting occurred!')
})

emtr.on(eventConfig.GREET, () => console.log('Yipee!'))

emtr.on('foo', () => console.log('bar'))

console.log('Hello!')
emtr.emit('foo')
emtr.emit(eventConfig.GREET)
emtr.emit('foo')
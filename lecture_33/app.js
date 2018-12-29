// build your own event emitter

const Emitter = require('./emitter')

const emtr = new Emitter()

emtr.on('greet', function() {
    console.log('Somwhere, someone said hello.')
})

emtr.on('greet', function() {
    console.log('A greeting occurred!')
})

emtr.on('greet', () => console.log('Yipee!'))

emtr.on('foo', () => console.log('bar'))

console.log('Hello!')
emtr.emit('foo')
emtr.emit('greet')
emtr.emit('foo')
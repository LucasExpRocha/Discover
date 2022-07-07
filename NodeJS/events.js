/*
const { EventEmitter } = require ('events')

const ev = new EventEmitter()

//on sempre ouvindo
//once uma unica vez

ev.once('saySomething', (message) => {
    console.log('Agora qm estuda é o: ', message)
})

ev.emit('saySomething', "Lucas")
ev.emit('saySomething', "Lucas")
*/

const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin')
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado`)
)

console.log("Oh! quem poderá me defender?")
chapolin.emit('help')

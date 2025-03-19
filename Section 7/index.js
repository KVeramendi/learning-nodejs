// const Emitter = require('./emitter');
const { EventEmitter } = require('events'); // libreria nativa de NodeJs
const { SAVE } = require('./event_names');
const emitter = new EventEmitter();
emitter.on(SAVE, () => {
    console.log('on Save activated 1...');
});
emitter.on(SAVE, () => {
    console.log('on Save activated 2...');
});
emitter.emit(SAVE);
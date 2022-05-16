const EventEmitter = require('events');

//create class
class MyEmitter extends EventEmitter{
}

// init object
const myemitter = new MyEmitter();

//Event Listner

myemitter.on('customEvent',()=>{
    console.log('Caught by Listner!');
});

myemitter.emit('customEvent');

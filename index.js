console.log('Hello from node.js');

const Person = require("./person");

const person1 = new Person('John Doe', 31);
person1.greeting();


const Logger = require('./logger');
const logger = new Logger();

logger.on('message', (payload)=>{
    console.log(`Listner: ${payload.id} : ${payload.message}`);
})

logger.log('Who Am I !');
const EventEmitter = require('events');
const uuid = require('uuid');   // creates random id

class Logger extends EventEmitter {
    log(msg){
        // Call event
        this.emit('message', {id: uuid.v4(), msg:msg});
    }
}
console.log(uuid.v4());

// module.exports = Logger;

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener: ', data));

logger.log('Hello World!')
logger.log('Hi!')
logger.log('Hello!')
logger.log('Hello agan!')



import messages, { log } from './logger.js';

// The default message is private for the module
console.log(messages.defaultMsg); // undefined

log();
log('Hello, Telerik Academy!');

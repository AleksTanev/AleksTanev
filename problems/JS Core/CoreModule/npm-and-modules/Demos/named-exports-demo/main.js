import { log } from './logger.js';

// The default message is private for the module
console.log(log.defaultMsg); // undefined

log();
log('Hello, Telerik Academy!');

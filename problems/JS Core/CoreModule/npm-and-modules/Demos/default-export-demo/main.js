import logger from './logger.js';

// The default message is private for the module
console.log(logger.defaultMsg); // undefined

logger.log();
logger.log('Hello, Telerik Academy!');

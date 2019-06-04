'use strict';

const { promisify } = require('util');

const eventEmitter = require('./event-emitter.js');
const eventNames = require('./event-names.js');

const fs = require('fs');
const readFileAsync = promisify(fs.readFile);

/**
 * Read handler function
 * @param {*} file
 */
function handleRead(file) {
  readFileAsync(file)
    .then(buffer =>
      eventEmitter.emit(eventNames.TRANSFORM, 'UPPERCASE', buffer, file)
    )
    .catch(error => {
      throw new Error(error);
    });
}

eventEmitter.on(eventNames.READ, handleRead);

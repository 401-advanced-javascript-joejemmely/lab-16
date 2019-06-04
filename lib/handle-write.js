'use strict';

const { promisify } = require('util');

const eventEmitter = require('./event-emitter.js');
const eventNames = require('./event-names.js');

const fs = require('fs');
const writeFileAsync = promisify(fs.writeFile);

/**
 * Write handler function
 * @param {*} file
 * @param {buffer} buffer
 */
function handleWrite(file, buffer) {
  writeFileAsync(file, buffer)
    .then(() => eventEmitter.emit(eventNames.DONE, file))
    .catch(error => {
      throw new Error(error);
    });
}

eventEmitter.on(eventNames.WRITE, handleWrite);

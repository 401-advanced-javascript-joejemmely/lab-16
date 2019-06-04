'use strict';

const eventEmitter = require('./event-emitter.js');
const eventNames = require('./event-names.js');

const uppercaseBuffer = require('./uppercase-buffer.js');

/**
 * Transform handler function
 * @param {string} type
 * @param {buffer} buffer
 * @param {*} file
 */
function handleTransform(type, buffer, file) {
  switch (type) {
  case 'UPPERCASE':
    eventEmitter.emit(eventNames.WRITE, file, uppercaseBuffer(buffer));
  }
}

eventEmitter.on(eventNames.TRANSFORM, handleTransform);

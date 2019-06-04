'use strict';

const eventEmitter = require('./event-emitter');
const eventNames = require('./event-names');

/**
 * Logger function
 * @param {*} event
 * @param {*} payload
 */
const log = (event, payload) => {
  const currentTime = new Date();
  console.log({ event, currentTime, payload });
};

eventEmitter.on(eventNames.READ, payload => log(eventNames.READ, payload));
eventEmitter.on(eventNames.TRANSFORM, payload =>
  log(eventNames.TRANSFORM, payload)
);
eventEmitter.on(eventNames.WRITE, payload => log(eventNames.WRITE, payload));
eventEmitter.on(eventNames.DONE, payload => log(eventNames.DONE, payload));

'use strict';

const eventEmitter = require('./lib/event-emitter');
const eventNames = require('./lib/event-names');

require('./lib/logger.js');
require('./lib/handle-read.js');
require('./lib/handle-transform.js');
require('./lib/handle-write.js');

let file = process.argv.slice(2).shift();
eventEmitter.emit(eventNames.READ, file);

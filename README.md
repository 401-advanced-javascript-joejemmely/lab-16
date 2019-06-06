# LAB - 16

## Event Driven Appliations

### Author: Joé Jemmely

### Links and Resources

- [submission PR](https://github.com/401-advanced-javascript-joejemmely/lab-16/pull/1)
- [travis](https://travis-ci.com/401-advanced-javascript-joejemmely/lab-16)

### Documentation

<a name="eventEmitter
Create an eventEmittermodule_"></a>

## eventEmitter

Create an eventEmitter

<a name="event-names
Export constant for the eventsmodule_"></a>

## event-names

Export constant for the events

<a name="handleRead"></a>

## handleRead(file)

Read handler function

**Kind**: global function

| Param | Type            |
| ----- | --------------- |
| file  | <code>\*</code> |

<a name="handleTransform"></a>

## handleTransform(type, buffer, file)

Transform handler function

**Kind**: global function

| Param  | Type                |
| ------ | ------------------- |
| type   | <code>string</code> |
| buffer | <code>buffer</code> |
| file   | <code>\*</code>     |

<a name="handleWrite"></a>

## handleWrite(file, buffer)

Write handler function

**Kind**: global function

| Param  | Type                |
| ------ | ------------------- |
| file   | <code>\*</code>     |
| buffer | <code>buffer</code> |

<a name="log"></a>

## log(event, payload)

Logger function

**Kind**: global function

| Param   | Type            |
| ------- | --------------- |
| event   | <code>\*</code> |
| payload | <code>\*</code> |

<a name="uppercaseBuffer
Return an uppercased buffermodule_"></a>

## uppercaseBuffer

Return an uppercased buffer ⇒ <code>buffer</code>
**Returns**: <code>buffer</code> - - uppercased buffer

| Param  | Type                |
| ------ | ------------------- |
| buffer | <code>buffer</code> |

#### Running the app

- `npm start <filename.ext>`

#### Tests

- How do you run tests? `npm test`

#### UML

![UML](./uml.jpg)

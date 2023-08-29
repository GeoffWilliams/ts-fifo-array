# ts-fifo-array

This is a TypeScript/ES6 rewrite of [fifo-array](https://github.com/ben-bradley/fifo-array/).

`fifo-array` is a great simple module but its missing its type definitions and hasnt been updated for many years so easiest to just copy-paste-and-update it.

This is a drop-in replacement for `fifo-array` and thanks to good unit tests on the original project its easy to test correct behaviour of this updated version _and_ reuse the documentation.

> A fixed-length, first-in-first-out array for Javascript.

All credit to [Ben Bradley](https://github.com/ben-bradley) for writing the original.

## Install

`npm install ts-fifo-array`

## Methods

All `FifoArray` methods behave exactly like the `Array.prototype` methods, but they trim the array down to have a `length` equal to the `max`.  Which end of the array that is trimmed is the difference:

- __FifoArray.push()__ - Trims from the front of the array until `length === max`.
- __FifoArray.unshift()__ - Trims from the back of the array until `length === max`.
- __FifoArray.splice()__ - Trims from the back of the array until `length === max`.

All other `Array.prototype` methods are untouched and will behave as expected.  I couldn't find any other methods that could add elements to the `FifoArray`

## Examples

### Basic usage

```js
import TsFifoArray from "ts-fifo-array"

const fifoArray = TsFifoArray(3, [ 'a', 'b', 'c', 'd' ]);
console.log(fifoArray); // => [ 'b', 'c', 'd' ]
console.log('max:', fifoArray.max); // => max: 3
fifoArray.push(1, 2);
console.log(fifoArray); // => [ 'd', 1, 2 ]
```

### #push()

```js
const fifoArray = TsFifoArray(3);
fifoArray.push(2, 3, 4, 5);
console.log(fifoArray); // => [ 3, 4, 5 ]
```

### #unshift()

```js
const fifoArray = TsFifoArray(3, [ 0, 1, 2 ]);
fifoArray.unshift('a', 'b');
console.log(fifoArray); // => [ 'a', 'b', 0 ]
```

### #splice()

```js
const fifoArray = TsFifoArray(3, [ 0, 1, 2 ]);
fifoArray.splice(1, 2, 'a'); // at position 1, remove 2 elements and add 'a'
console.log(fifoArray); // => [ 0, 'a' ]

fifoArray.splice(1, 0, 'b'); // at posotion 1, remove 0 elements and add 'b'
console.log(fifoArray); // => [ 0, 'b', 'a' ]
```

### .max

```js
// if necessary, it chops the array down to the new max, removing elements from the end
const fifoArray = TsFifoArray(5, [ 0, 1, 2, 3, 4 ]);
console.log(fifoArray); // => [ 0, 1, 2, 3, 4 ]
fifoArray.max = 3;
console.log('new max:', fifoArray.max); // => new max: 3
console.log(fifoArray); // => [ 0, 1, 2 ]

fifoArray.max = 10;
fifoArray.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h');
console.log(fifoArray); // => [ 1, 2, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]
```

## Examples

See unit tests: [`test/index.test.ts`](./test/index.test.ts)

## References

Here are several sources that helped me write this module:

- http://www.bennadel.com/blog/2308-creating-a-fixed-length-queue-in-javascript-using-arrays.htm
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
- https://variadic.me/posts/2013-10-22-bind-call-and-apply-in-javascript.html



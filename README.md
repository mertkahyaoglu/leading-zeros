# leading-zeros

> Prepend integers with leading zeros.

## Install

```
$ npm install --save leading-zeros
```


## Usage

```js
var leadingZeros = require('leading-zeros');

// arguments -> (number, amount of zero to be prepended)
leadingZeros(48, 5); 
// => 0000048

leadingZeros(-213, 2); 
// => -00213

## License

MIT © Mert Kahyaoğlu 2015


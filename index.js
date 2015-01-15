'use strict';
var isFinite = require('is-finite');
var repeating = require('repeating');

module.exports = function (num , numZero){
  if (!isFinite(num)) {
    throw new TypeError('Expected a finite number as first argument');
  }
  if (!isFinite(numZero)) {
    throw new TypeError('Expected a finite number as the second argument');
  }
  var n = Math.abs(num);
  var zeros = repeating('0', numZero);
  zeros = num < 0 ? '-' + zeros : zeros;
  return zeros+n;
};

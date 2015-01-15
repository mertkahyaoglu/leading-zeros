'use strict';
var assert = require('assert');
var lz = require('./');

describe('leading-zero', function(){
  it('should return the number with the correct number of leading zeros', function(){
    assert.equal(lz(48, 5), '0000048');
    assert.equal(lz(-48897,1), '-048897');
  });
});

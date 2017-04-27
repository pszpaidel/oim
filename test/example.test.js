//const sinon = require("sinon");
//const chai = require("chai");

var assert = require('assert');

describe('Array', function() {

  before(function() {
    //console.log('before')
  });

  after(function() {
    //console.log('after')
  });

  beforeEach(function() {
    //console.log('beforeEach')
  });

  afterEach(function() {
    //console.log('afterEach')
  });

  describe('#indexOf()', function() {

    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });

  describe('#length', function() {
    it('should return 1 when the value has one element', function() {
      assert.equal(1, [1].length);
    });
  });

});
import assert from 'assert'
import isFromL from '../isFromL.js';

describe('isFromL should return', function(){

it('should return true if ends with L', function(){
assert.equal(isFromL('123 L'), true);
});
it('should return false if ends with A', function(){
assert.equal(isFromL('123 A'), false);
});

});
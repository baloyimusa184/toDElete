import assert from 'assert';
import isFromBellville from '../isFromBellville.js';

describe('isFromBellville as a function', function(){

    it('Should return true if starts with CY', function(){
        assert.equal(isFromBellville('CY 123'), true);
    });
    it('Error if begin with CJ', function(){
    assert.equal(isFromBellville('CJ 123'), false);
});
});



import assert from 'assert';
import isDayName from '../isDayName.js';

describe('isDayName() as function', function(){

it('should return true if day ends with day', function(){
    assert.equal(isDayName('Saturday'), true);

});
it('should return true if day ends with day', function(){

    assert.equal(isDayName('Monday'), true);

});

it('should return false if not ending with day', function(){
    assert.equal(isDayName('January'), false, 'January is not a day');

});
});
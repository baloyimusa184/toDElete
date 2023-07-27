/*
// greet.test.js
import greet from '../greet.js';
 
test('greet function should greet the person with their name', () => {
  const result = greet('John');
  expect(result).toBe('Hello, John');
});

test('greet function should greet the person with their name', () => {
  const result = greet('Alice');
  expect(result).toBe('Hello, Alice');
});
*/

import assert from "assert";
import greet from "../greet.js";

describe('The greet function', function(){

    it('should greet Musa correctly', function(){
        assert.equal('Hello, Musa', greet('Musa'));
    });
    it('should greet Hlengani correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Hlengani', greet('Hlengani'));
    });
});
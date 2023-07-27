import assert from "assert";
import capeTownReg from "../capeTownReg.js";

describe('Cape Town registration function', function(){

    it('Should return true if starts with CA', function(){
        assert.equal(capeTownReg('CA 123 908'), true);
    });
    it('Error if begin with CJ', function(){
    assert.equal(capeTownReg('CJ 123 908'), false);
});
});

const calc = require("./calc");
var assert = require('mocha');
var assert = require('chai').assert;
// define test cases
it("shhould add two number", ()=>{
    var sum = calc.add(3,3);
    assert.equal(sum,6,  `expected value is 6 but got ${sum}`);
})

it("should async add two number", (done) =>{
    calc.asyncAdd(3,4,(sum)=>{
        console.log(`sum is ${sum}`);
        assert.equal(sum, 7, `expected value is 7 but got ${sum}`);
        done();
    });
})

it("should aysnc square two numbers", (done)=>{
    // call method and defind callback function which takes one parameter
    calc.asyncSqr(2,4, (result)=>{
        console.log(`result is ${result}`);
        assert.equal(result, 8, `expected value is 8 but got ${result}`);
        done();
    })
})
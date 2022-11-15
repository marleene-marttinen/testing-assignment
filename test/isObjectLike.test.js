var chai = require("chai");
const isObjectLike = require("../isObjectLike.js");
const expect = chai.expect


describe("isObjectLike", () => {

    it("Should return true when value is empty", ()=>{
        expect(isObjectLike({})).to.be.true;
    }),

    it("Should return true when value is an array", ()=>{
        expect(isObjectLike([1, 2, 3])).to.be.true;
    }),

    it("Should return false when value is function", ()=>{
        expect(isObjectLike(Function)).to.be.false;
    }),
    
    it("Should return false when value is null", ()=>{
        expect(isObjectLike(null)).to.be.false;
    });
})

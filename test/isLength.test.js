var chai = require("chai");
const isLength = require("../isLength.js");
const expect = chai.expect
const MAX_SAFE_INTEGER = 9007199254740991


describe("isLength", () => {

    it("Should return true with integer", ()=>{
        expect(isLength(1)).to.be.true;
    }),

    it("Should return true with 0", ()=>{
        expect(isLength(0)).to.be.true;
    }),

    it("Should return false with a negative number", ()=>{
        expect(isLength(-1)).to.be.false;
    }),

    it("Should return false with string", ()=>{
        expect(isLength("1")).to.be.false;
    }),

    it("Should return false with float", ()=>{
        expect(isLength(1.2)).to.be.false;
    }),

    it("Should return false with boolean value true", ()=>{
        expect(isLength(true)).to.be.false;
    }),

    it("Should return false with boolean value false", ()=>{
        expect(isLength(false)).to.be.false;
    }),

    it("Should return false with null", ()=>{
        expect(isLength(null)).to.be.false;
    }),

    it("Should return false with infinity value", ()=>{
        expect(isLength(Infinity)).to.be.false;
    }),

    it("Should return false with Number.MIN_VALUE", ()=>{
        expect(isLength(Number.MIN_VALUE)).to.be.false;
    }),

    it("Should return true with MAX_SAFE_INTEGER", ()=>{
        expect(isLength(MAX_SAFE_INTEGER)).to.be.true;
    }),

    it("Should return false with integers over MAX_SAFE_INTEGER", ()=>{
        expect(isLength(MAX_SAFE_INTEGER+1)).to.be.false;
    });
})

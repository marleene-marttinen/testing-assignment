var chai = require("chai");
const isObjectLike = require("../isObjectLike.js");
const expect = chai.expect


describe("iOL", () => {

    it("Should return false when value is null", ()=>{
        expect(isObjectLike(null)).to.be.false;
    });
})

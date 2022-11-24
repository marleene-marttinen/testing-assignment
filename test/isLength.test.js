import chai from 'chai';
import isLength from './../isLength.js';
const expect = chai.expect
const MAX_SAFE_INTEGER = 9007199254740991


describe("isLength", () => {

    it("Should return true with integer", ()=>{
        // Arrange
        const value = 1;

        // Act
        const result = isLength(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return true with 0", ()=>{
        // Arrange
        const value = 0;

        // Act
        const result = isLength(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return false with a negative number", ()=>{
        // Arrange
        const value = -1;

        // Act
        const result = isLength(value);

        // Assert
        expect(result).to.be.false;
    }),

    it("Should return false with string", ()=>{
        // Arrange
        const value = "1";

        // Act
        const result = isLength(value);

        // Assert
        expect(result).to.be.false;
    }),

    it("Should return false with float", ()=>{
        // Arrange
        const value = 1.2;

        // Act
        const result = isLength(value);

        // Assert
        expect(result).to.be.false;
    }),

    it("Should return false with boolean value true", ()=>{
        // Arrange
        const value = true;

        // Act
        const result = isLength(value);

        // Assert
        expect(result).to.be.false;
    }),

    it("Should return false with boolean value false", ()=>{
        // Arrange
        const value = false;

        // Act
        const result = isLength(value);

        // Assert
        expect(result).to.be.false;
    }),

    it("Should return false with null", ()=>{
        // Arrange
        const value = null;

        // Act
        const result = isLength(value);

        // Assert
        expect(result).to.be.false;
    }),

    it("Should return false with infinity value", ()=>{
        // Arrange
        const value = Infinity;

        // Act
        const result = isLength(value);

        // Assert
        expect(result).to.be.false;
    }),

    it("Should return false with Number.MIN_VALUE", ()=>{
        // Arrange
        const value = Number.MIN_VALUE;

        // Act
        const result = isLength(value);

        // Assert
        expect(result).to.be.false;
    }),

    it("Should return false with integers over MAX_SAFE_INTEGER", ()=>{
        // Arrange
        const value = MAX_SAFE_INTEGER+1;

        // Act
        const result = isLength(value);

        // Assert
        expect(result).to.be.false;
    });
})

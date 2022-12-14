import chai from 'chai';
import isObjectLike from '../src/isObjectLike.js';
const expect = chai.expect

describe("isObjectLike", () => {

    it("Should return true when value is an empty object", ()=>{
        // Arrange
        const value = {};

        // Act
        const result = isObjectLike(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return true when value is a Boolean object (true)", ()=>{
        // Arrange
        const value = new Boolean(true);

        // Act
        const result = isObjectLike(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return true when value is a Boolean object (false)", ()=>{
        // Arrange
        const value = new Boolean(false);

        // Act
        const result = isObjectLike(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return true when value is a Number object", ()=>{
        // Arrange
        const value = new Number("1");

        // Act
        const result = isObjectLike(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return true when value is a String object", ()=>{
        // Arrange
        const value = new String("test");

        // Act
        const result = isObjectLike(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return true when value is a Date object", ()=>{
        // Arrange
        const value = new Date("2022-01-01");

        // Act
        const result = isObjectLike(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return true when value is a Math object", ()=>{
        // Arrange
        const value = Math;

        // Act
        const result = isObjectLike(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return true when value is a RegExp object", ()=>{
        // Arrange
        const value = new RegExp('\\w+');

        // Act
        const result = isObjectLike(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return true when value is an array", ()=>{
        // Arrange
        const value = [1, 2, 3];

        // Act
        const result = isObjectLike(value);

        // Assert
        expect(result).to.be.true;
    }),
    

    it("Should return true when value is an object", ()=>{
        // Arrange
        const value = {type: "Candle", price: 5};

        // Act
        const result = isObjectLike(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return false when value is a boolean primitive (true)", ()=>{
        // Arrange
        const value = true;

        // Act
        const result = isObjectLike(value);

        // Assert
        expect(result).to.be.false;
    }),

    it("Should return false when value is a boolean primitive (false)", ()=>{
        // Arrange
        const value = false;

        // Act
        const result = isObjectLike(value);

        // Assert
        expect(result).to.be.false;
    }),

    it("Should return false when value is an integer", ()=>{
        // Arrange
        const value = 3;

        // Act
        const result = isObjectLike(value);

        // Assert
        expect(result).to.be.false;
    }),

    it("Should return false when value is undefined", ()=>{
        // Arrange
        const value = undefined;

        // Act
        const result = isObjectLike(value);

        // Assert
        expect(result).to.be.false;
    }),

    it("Should return false when value is a function", ()=>{
        // Arrange
        const value = Function;

        // Act
        const result = isObjectLike(value);

        // Assert
        expect(result).to.be.false;
    }),

    it("Should return false when value is null", ()=>{
        // Arrange
        const value = null;

        // Act
        const result = isObjectLike(value);

        // Assert
        expect(result).to.be.false;
    }),

    it("Should return false when value is a symbol", ()=>{
        // Arrange
        const value = Symbol('foo');

        // Act
        const result = isObjectLike(value);

        // Assert
        expect(result).to.be.false;
    }),

    it("Should return false when value is a bigint", ()=>{
        // Arrange
        const value = BigInt(9007199254740991);

        // Act
        const result = isObjectLike(value);

        // Assert
        expect(result).to.be.false;
    });
})

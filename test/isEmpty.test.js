import chai from 'chai';
import isEmpty from './../isEmpty.js';
const expect = chai.expect


describe("isEmpty", () => {

    it("Should return true with null", ()=>{
        // Arrange
        const value = null;

        // Act
        const result = isEmpty(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return true when value is an integer", ()=>{
        // Arrange
        const value = 1;

        // Act
        const result = isEmpty(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return true with 0", ()=>{
        // Arrange
        const value = 0;

        // Act
        const result = isEmpty(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return true when value is an empty Number object", ()=>{
        // Arrange
        const value = new Number();

        // Act
        const result = isEmpty(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return true when value is an empty object", ()=>{
        // Arrange
        const value = {};

        // Act
        const result = isEmpty(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return true when value is an empty array", ()=>{
        // Arrange
        const value = [];

        // Act
        const result = isEmpty(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return true when value is an empty String object", ()=>{
        // Arrange
        const value = new String();

        // Act
        const result = isEmpty(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return true when value is a Boolean value (true)", ()=>{
        // Arrange
        const value = true;

        // Act
        const result = isEmpty(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return true when value is a Boolean value (false)", ()=>{
        // Arrange
        const value = false;

        // Act
        const result = isEmpty(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return true when value is an empty RegExp object", ()=>{
        // Arrange
        const value = new RegExp('');

        // Act
        const result = isEmpty(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return true when value is an empty Math object", ()=>{
        // Arrange
        const value = Math;

        // Act
        const result = isEmpty(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return true when value is a function", ()=>{
        // Arrange
        const value = Function;

        // Act
        const result = isEmpty(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return true when value is undefined", ()=>{
        // Arrange
        const value = undefined;

        // Act
        const result = isEmpty(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return true when value is an empty symbol", ()=>{
        // Arrange
        const value = Symbol('');

        // Act
        const result = isEmpty(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return true when value is a Map object with size 0", ()=>{
        // Arrange
        const value = new Map();

        // Act
        const result = isEmpty(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return true when value is a Set object with size 0", ()=>{
        // Arrange
        const value = new Set();

        // Act
        const result = isEmpty(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return true when value is an empty string", ()=>{
        // Arrange
        const value = '';

        // Act
        const result = isEmpty(value);

        // Assert
        expect(result).to.be.true;
    }),

    it("Should return false when value is a Map object with size over 0", ()=>{
        // Arrange
        const value = new Map([["candle", 1]]);

        // Act
        const result = isEmpty(value);

        // Assert
        expect(result).to.be.false;
    }),

    it("Should return false when value is a Set object with size over 0", ()=>{
        // Arrange
        const value = new Set(["1","2","3"]);

        // Act
        const result = isEmpty(value);

        // Assert
        expect(result).to.be.false;
    }),

    it("Should return false when value is an object with keys", ()=>{
        // Arrange
        const value = { 'a': 1 };

        // Act
        const result = isEmpty(value);

        // Assert
        expect(result).to.be.false;
    }),

    it("Should return false when value is a String object with keys", ()=>{
        // Arrange
        const value = new String("test");

        // Act
        const result = isEmpty(value);

        // Assert
        expect(result).to.be.false;
    }),

    it("Should return false when value is a string with keys", ()=>{
        // Arrange
        const value = 'abc';

        // Act
        const result = isEmpty(value);

        // Assert
        expect(result).to.be.false;
    }),

    it("Should return false when value is an array with keys", ()=>{
        // Arrange
        const value = [1, 2, 3];

        // Act
        const result = isEmpty(value);

        // Assert
        expect(result).to.be.false;
    });
})

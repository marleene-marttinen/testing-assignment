import chai from 'chai';
import chunk from '../src/chunk.js';
const expect = chai.expect


describe("chunk", () => {


    it("Should return an empty array when the size is 0", ()=>{
        // Arrange
        const array = ['a', 'b', 'c', 'd'];
        const size = 0;

        // Act
        const result = chunk(array, size);

        // Assert
        expect(result).to.deep.equal([]);
    }),

    it("Should return an empty array when an empty array is given", ()=>{
        // Arrange
        const array = [];
        const size = 2;

        // Act
        const result = chunk(array, size);

        // Assert
        expect(result).to.deep.equal([]);
    }),
    
    //Fails because of a bug
    it("Should return one item arrays when the size is 1", ()=>{
        // Arrange
        const array = ['a', 'b', 'c', 'd'];
        const size = 1;

        // Act
        const result = chunk(array, size);

        // Assert
        expect(result).to.deep.equal([['a'], ['b'], ['c'], ['d']]);
    }),
    
    //Fails because of a bug
    it("Should return two arrays of different lengths when the given value is an odd number", ()=>{
        // Arrange
        const array = ['a', 'b', 'c', 'd'];
        const size = 3;

        // Act
        const result = chunk(array, size);

        // Assert
        expect(result).to.deep.equal([['a','b','c'],['d']]);
    });

})

import chai from 'chai';
import words from '../src/words.js';
const expect = chai.expect


describe("words", () => {


    it("Should return an array with 3 items in it when the pattern is undefined", ()=>{
        // Arrange
        const string = ('fred, barney, & pebbles');
        const pattern = undefined

        // Act
        const result = words(string, pattern);

        // Assert
        expect(result).to.deep.equal(['fred', 'barney', 'pebbles']);
    }),
    
    it("Should return an array with 4 items in it when the pattern is defined", ()=>{
        // Arrange
        const string = ('fred, barney, & pebbles');
        const pattern = /[^, ]+/g

        // Act
        const result = words(string, pattern);

        // Assert
        expect(result).to.deep.equal(['fred', 'barney', '&', 'pebbles']);
    }),
    
    it("Should return an empty array if the string is empty", ()=>{
        // Arrange
        const string = ('');
        const pattern = /[^, ]+/g

        // Act
        const result = words(string, pattern);

        // Assert
        expect(result).to.deep.equal([]);
    });

})

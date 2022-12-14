import chai from 'chai';
import toString from '../src/toString.js';
const expect = chai.expect

describe("toString", () => {
    it("Should return null as empty string", ()=>{

        // Arrange
        const value = null;

        // Act
        const result = toString(value);

        //Assert
        expect(result).contains('');
    });

    it("Should return negative number as string", ()=> {
       
        // Arrange
        const value = -0;

        // Act
        const result = toString(value);

        //Assert
        expect(result).contains('-0');
    });

    it("Should return list of numbers as string", ()=> {
       
        // Arrange
        const value = [1, 2, 3];

        // Act
        const result = toString(value);

        //Assert
        expect(result).contains('1,2,3');
    });
});
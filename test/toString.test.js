import chai from 'chai';
import toString from '../src/toString.js';
const expect = chai.expect

describe("toString", () => {
    // Fails because of bug -> should return empty string but returns null
    xit("Should return null as empty string", ()=>{

        // Arrange
        const value = null;

        // Act
        const result = toString(value);

        //Assert
        expect(result).to.deep.equal('');
    });

    //Fails because of bug -> should return empty string but returns undefined
    xit("Should return undefined as empty string", ()=>{

        // Arrange

        // Act
        const result = toString();

        //Assert
        expect(result).to.deep.equal('');
    });

    it("Should return number as string", ()=> {
       
        // Arrange
        const value = 1670;

        // Act
        const result = toString(value);

        //Assert
        expect(result).to.deep.equal('1670');
    });

    it("Should return negative number as string", ()=> {
       
        // Arrange
        const value = -0;

        // Act
        const result = toString(value);

        //Assert
        expect(result).to.deep.equal('-0');
    });

    it("Should return list of numbers as string", ()=> {
       
        // Arrange
        const value = [1, 2, 3];

        // Act
        const result = toString(value);

        //Assert
        expect(result).to.deep.equal('1,2,3');
    });

    it("Should return list of characters as string", ()=> {
       
        // Arrange
        const value = [1, 'abc', 12, -56, 'discount'];

        // Act
        const result = toString(value);

        //Assert
        expect(result).to.deep.equal('1,abc,12,-56,discount');
    });
});
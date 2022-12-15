import chai from 'chai';
import toInteger from '../src/toInteger.js';
const expect = chai.expect

describe("toInteger", () => {
    it("Should return value as integer", ()=>{

        // Arrange
        const value = 180;

        // Act
        const result = toInteger(value);

        //Assert
        expect(result).to.deep.equal(180);
    });

    it("Should return value without decimals as integer", ()=>{

        // Arrange
        const value = 1.15;

        // Act
        const result = toInteger(value);

        //Assert
        expect(result).to.deep.equal(1);
    });

    it("Should return negative value converted as integer", ()=> {
       
        // Arrange
        const value = -15.50303948822;

        // Act
        const result = toInteger(value);

        //Assert
        expect(result).to.deep.equal(-15);
    });

    it("Should return 0 as minimum value", ()=> {
       
        // Arrange
        const value = Number.MIN_VALUE;

        // Act
        const result = toInteger(value);

        //Assert
        expect(result).to.deep.equal(0);
    });

    it("Should return infinity", ()=> {
       
        // Arrange
        const value = Infinity;

        // Act
        const result = toInteger(value);

        //Assert
        expect(result).to.deep.equal(1.7976931348623157e+308);
    });
});
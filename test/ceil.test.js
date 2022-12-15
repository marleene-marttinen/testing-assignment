import chai from 'chai';
import ceil from '../src/ceil.js';
const expect = chai.expect

describe("ceil", () => {

    it("Should return rounded number with default (0) decimals", ()=>{
        // Arrange
        const value = 4.006;

        // Act
        const result = ceil(value);

        // Assert
        expect(result).to.deep.equal(5);
    }),

    it("Should return rounded number with two decimals", ()=>{
        // Arrange
        const value = 6.004;
        const decimals = 2;

        // Act
        const result = ceil(value, decimals);

        // Assert
        expect(result).to.deep.equal(6.01);

    }),

    it("Should return second rounded number with two decimals", ()=>{
        // Arrange
        const value = 167.125;
        const precision = 2;

        // Act
        const result = ceil(value, precision);

        // Assert
        expect(result).to.deep.equal(167.13);

    }),
    
    it("Should return rounded negative number with two decimals", ()=>{
        // Arrange
        const value = -15.98989898;
        const precision = 2;

        // Act
        const result = ceil(value, precision);

        // Assert
        expect(result).to.deep.equal(-15.99);

    }),

    it("Should return rounded number with negative precision", ()=>{
        // Arrange
        const value = 6040;
        const precision = -2;

        // Act
        const result = ceil(value, precision);

        // Assert
        expect(result).to.deep.equal(6100);

    })
});
import chai from 'chai';
import reduce from '../src/reduce.js';
const expect = chai.expect

describe("reduce", () => {
    it("Should return the correct sum of two values", ()=>{

        // Arrange
        const firstValue = 1;
        const secondValue = 2;

        // Act
        const result= reduce([firstValue, secondValue], (sum, n) => sum + n, 0)

        //Assert
        expect(result).to.deep.equal(3);
    }),

    it("Should return the correct sum of three values", ()=>{

        // Arrange
        const firstValue = 10.90;
        const secondValue = 19.90;
        const thirdValue = 4.99;

        // Act
        const result= reduce([firstValue, secondValue, thirdValue], (sum, n) => sum + n, 0)

        //Assert
        expect(result).to.deep.equal(35.79);
    }),

    it("Should return the correct sum of three values with one null value", ()=>{

        // Arrange
        const firstValue = 10.90;
        const secondValue = null;
        const thirdValue = 4.99;

        // Act
        const result= reduce([firstValue, secondValue, thirdValue], (sum, n) => sum + n, 0)

        //Assert
        expect(result).to.deep.equal(15.89);
    }),


    it("Should return 0 as sum when all values are null", ()=>{

        // Arrange
        const firstValue = null;
        const secondValue = null;

        // Act
        const result= reduce([firstValue, secondValue], (sum, n) => sum + n, 0)

        //Assert
        expect(result).to.deep.equal(0);
    }),


    it("Should return value key pairs", ()=>{
        //Arrange

        //Act
        const result = reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
           (result[value] || (result[value] = [])).push(key)
           return result
         }, {})

        //Assert
        expect(result).to.deep.equal({ '1': ['a', 'c'], '2': ['b'] });
    })
});
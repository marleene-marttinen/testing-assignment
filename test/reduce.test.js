import chai from 'chai';
import reduce from '../src/reduce.js';
const expect = chai.expect

describe("reduce", () => {
    it("Should return the correct sum", ()=>{

        // Arrange
        function halfPrice(price) {
            return price * 0.5;          
        }

        // Act
        const result= reduce([1, 2], (sum, n) => sum + n, 0)

        //Assert
        expect(result).equal(3);
    });

    it("Should return value key pairs", ()=>{
        //Arrange

        //Act
        const result = reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
           (result[value] || (result[value] = [])).push(key)
           return result
         }, {})

        //Assert
        expect(result).key({ '1': ['a', 'c'], '2': ['b'] });
    })
});
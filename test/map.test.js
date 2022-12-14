import chai from 'chai';
import map from '../src//map.js';
const expect = chai.expect

describe("map", () => {
    it("Should return the correct prices with discount percent of 50%", ()=>{

        // Arrange
        function halfPrice(price) {
            return price * 0.5;          
        }

        // Act
        const result = map([10.00, 19.90, 46.70], halfPrice);

        //Assert
        expect(result).contains(5.00, 9.95, 23.35);
    });

    it("Should return the correct prices with discount percent of 10%", ()=> {
       
        // Arrange
        function discount10(price) {
            return price * 0.9;
        }

        // Act
        const result = map([10.00, 19.90, 46.70], discount10);

        //Assert
        expect(result).contains(9.00, 17.91, 42.03);
    });

    it("Should return same prices when discount is 0", ()=> {
       
        // Arrange
        function discount(price) {
            return price;
        }

        // Act
        const result = map([10, 20], discount);

        //Assert
        expect(result).contains(10, 20);
    });

    it("Should return empty list when values null", ()=> {
       
        // Arrange
        const discount = null;

        // Act
        const result = map(null, discount);

        //Assert
        expect(result).length(0);
    });
});
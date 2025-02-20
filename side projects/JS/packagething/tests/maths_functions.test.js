
const {add,subtract,multiply,divide} = require("../maths_functions");

describe("Calculator", () => {

    describe("add", () => {
        test("should calculate basic addition", () => {
          expect(add(3,5)).toBe(8); // 3 + 5 = 8
        });
    
        test("should calculate more complex addition", () => {
          expect(add(15.17,-7.35)).toBe(); // 15.17 + -7.35 = 7.82
        });
      });

      describe("subtract", () => {
        test("should calculate basic subtraction", () => {
          expect(add(5,3)).toBe(2); // 5 - 3 = 2
        });
    
        test("should calculate more complex subtraction", () => {
          expect(add(15.17,-7.35)).toBe(); // 15.17 - -7.35 = 22.52
        });
      });

      /*describe("multiply", () => {
        test("should calculate basic multiplication", () => {
          expect(add(3,5)).toBe(8); // 3 + 5 = 8
        });
    
        test("should calculate more complex addition", () => {
          expect(add(15.17,-7.35)).toBe(); // 15.17 + -7.35 = 7.82
        });
      });*/

      describe("divide", () => {
        test("should calculate basic division", () => {
          expect(divide(18,9)).toBe(2); // 
        });
    
        test("should calculate more complex division", () => {
          expect(divide(6,0)).toBe(0);
        });
      });

});
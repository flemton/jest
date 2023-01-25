const calculator = require("./task3");

const calc = new calculator(2, 2);

describe('calculator', () => {
    test('adds 2 + 2 equals 4', () => {
        expect(calc.add()).toBe(4);
    });

    test('subtracts 2 - 2 equals 0', () => {
        expect(calc.subract()).toBe(0);
    });

    test('multiplies 2 * 2 equals 4', () => {
        expect(calc.multiply()).toBe(4);
    })

    test('divides 2 / 2 equals 1', () => {
        expect(calc.divide()).toBe(1);
    })
})
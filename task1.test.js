const stringLength = require("./task1");

test('length of string newton equals 6', () => {
    expect(stringLength('newton')).toBe(6);
});

test('length of string newtonianial equals 12', () => {
    expect(stringLength('newtonianial')).toBe(12);
});
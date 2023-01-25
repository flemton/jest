const capitalize = require('./task4');

test('capitalizes newton to Newton', () => {
    expect(capitalize('newton')).toBe('Newton');
});
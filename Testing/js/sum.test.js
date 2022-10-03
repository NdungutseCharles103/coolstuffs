const sum = require( "./sum" );

test('should add two number', () => { 
    expect(sum(1, 2)).toBe(3);
})
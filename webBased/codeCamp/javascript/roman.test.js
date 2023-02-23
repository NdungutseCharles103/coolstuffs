const convertToRoman = require( "./roman" );

test('should convert to roman', () => { 
    expect(convertToRoman(50)).toBe('L');
    expect(convertToRoman(100)).toBe('C');
    expect(convertToRoman(500)).toBe('D');
    expect(convertToRoman(1000)).toBe('M');
    expect(convertToRoman(3999)).toBe('MMMCMXCIX');
 })
const rot13 = require( "./rot13" );


test('it should rotate by 13 a word', () => { 
    expect(rot13('SERR CVMMN!')).toBe('FREE PIZZA!');
    
 })
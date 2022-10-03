const telephoneCheck = require( "./telephoneChecker" );

test('It should check if telephone number is valid', () => { 
    expect(telephoneCheck("555-555-5555")).toEqual(true)
 })
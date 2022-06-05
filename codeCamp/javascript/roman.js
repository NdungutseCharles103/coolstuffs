// Visit => https://duniya-roman-numeral-converter.netlify.app/
// Npm Package => https://www.npmjs.com/package/cr-numeral

const convertToRoman = num => {
    const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const roman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
    let romanNumeral = ''

    // While num is not equal to 0, keep iterating with the value
    while(num !== 0){
      	// Find from the numbers array the match for the current number
        const index = numbers.findIndex(nums => num >= nums)
        
        // Keeping pushing the roman value to romanNumeral
        // Cause the found number from numbers matches the index of its
        // Corresponding roman below
        romanNumeral += roman[index]
      
      	// Set num to a new value by Substracting the used number from it 
        num -= numbers[index]
    }

    return romanNumeral
}

console.log(convertToRoman(3999));
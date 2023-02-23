// Visit => https://duniya-roman-numeral-converter.netlify.app/
// Npm Package => https://www.npmjs.com/package/cr-numeral

const convertToRoman = (rom) => {
	const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	const roman = [
		"M",
		"CM",
		"D",
		"CD",
		"C",
		"XC",
		"L",
		"XL",
		"X",
		"IX",
		"V",
		"IV",
		"I",
	];
	let romanNumeral = "";

	while (rom !== '') {
		const index = roman.findIndex((nums) => rom >= nums);
		romanNumeral += roman[index];
		rom -= numbers[index];
	}

	return romanNumeral;
};

console.log(convertToRoman(3999));
module.exports = convertToRoman;

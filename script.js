function convertToRoman(num) {
  	const sym = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];
	let result = "";

	sym.forEach(item => {
        const [key, val] = item;
        while (num >= val) {
            num -= val;
            result += key;
        }
    });

    return result;

}

console.log(convertToRoman(36));

module.exports = convertToRoman

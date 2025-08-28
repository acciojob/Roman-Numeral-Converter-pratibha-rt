function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
	let result = "";
	for (int i = 0; i <= 6; i ++) {
		for (let i = 0; i <= 6; i ++) {
			let symbol = obj[i][0];
			let value = obj[i][1];

			if (i % 2 === 0 && i < 6) {
				let nextValue = obj[i][1];
			 let subtractValue = obj[i + 2][1];
				let subtractSymbol = obj[i + 2][0];

				if (num >= nextValue - subtractValue) {
                result += subtractSymbol + symbol;
                num -= (nextValue - subtractValue);
            }
			}

			 while (num >= value) {
            result += symbol;
            num -= value;
        }
		}

		console.log(result);
	}

}

console.log(convertToRoman(36));

module.exports = convertToRoman

function convertToRoman(num) {
  if (num <= 0 || num > 100000) return "Invalid input";

  const romanNumerals = [
    { value: 100000, symbol: 'ↈ' },
    { value: 90000, symbol: 'ↇↈ' },
    { value: 50000, symbol: 'ↇ' },
    { value: 40000, symbol: 'ↂↇ' },
    { value: 10000, symbol: 'ↂ' },
    { value: 9000, symbol: 'Mↂ' },
    { value: 5000, symbol: 'ↁ' },
    { value: 4000, symbol: 'MV̄' },
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];

  let result = '';
  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      result += romanNumerals[i].symbol;
      num -= romanNumerals[i].value;
    }
  }

  return result;
}

// Example usage:
console.log(convertToRoman(14));     // XIV
console.log(convertToRoman(798));    // DCCXCVIII
console.log(convertToRoman(99999));  // ↇↈↂCMXCIX

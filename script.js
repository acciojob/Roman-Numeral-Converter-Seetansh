document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('numberInput');
    const convertBtn = document.getElementById('convertBtn');
    const outputDiv = document.getElementById('output');
    
    // Convert on page load and on button click
    convertBtn.addEventListener('click', convertNumber);
    numberInput.addEventListener('input', convertNumber);
    
    convertNumber();

    function convertNumber() {
        const num = parseInt(numberInput.value);
        
        if (isNaN(num) || num < 0 || num > 100000) {
            outputDiv.textContent = 'Please enter a number between 0 and 100,000';
            return;
        }
        
        const romanNumeral = convertToRoman(num);
        outputDiv.textContent = romanNumeral;
    }

    function convertToRoman(num) {
        if (num === 0) return "N";

        const symbols = [
            [1000, "M"],
            [900, "CM"],
            [500, "D"],
            [400, "CD"],
            [100, "C"],
            [90, "XC"],
            [50, "L"],
            [40, "XL"],
            [10, "X"],
            [9, "IX"],
            [5, "V"],
            [4, "IV"],
            [1, "I"]
        ];

        if (num >= 4000) {
            const thousands = Math.floor(num / 1000);
            const remainder = num % 1000;
            const thousandsRoman = convertNumeral(thousands, symbols);
            const remainderRoman = remainder ? convertNumeral(remainder, symbols) : "";
            return `(${thousandsRoman})${remainderRoman}`;
        }

        return convertNumeral(num, symbols);
    }

    function convertNumeral(num, symbols) {
        let result = "";
        for (const [value, symbol] of symbols) {
            while (num >= value) {
                result += symbol;
                num -= value;
            }
        }
        return result;
    }
});

/* Your CSS Code here. */
function toRoman(num) {
  if (num <= 0 || num > 100000) {
    return "Invalid input";
  }

  const romanMap = [
    ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
    ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
    ['X', 10], ['IX', 9], ['V', 5], ['IV', 4],
    ['I', 1]
  ];

  let result = "";

  for (let [roman, value] of romanMap) {
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }

  return result;
}

// Example usage:
const input = prompt("Enter a string");   // Output: XIV
console.log(toRoman(input));   // Output: DCCXCVIII
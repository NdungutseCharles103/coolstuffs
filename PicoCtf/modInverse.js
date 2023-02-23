function modInverse(a, m) {
  // Calculate the greatest common divisor of a and m
  let [gcd, x, y] = extendedGcd(a, m);

  // If gcd(a, m) is not 1, then a has no modular inverse modulo m
  if (gcd !== 1) {
    return null;
  } else {
    // Return the modular inverse of a modulo m
    return ((x % m) + m) % m;
  }
}

// Helper function to calculate the extended Euclidean algorithm
function extendedGcd(a, b) {
  if (b === 0) {
    return [a, 1, 0];
  } else {
    let [gcd, x1, y1] = extendedGcd(b, a % b);
    let x = y1;
    let y = x1 - Math.floor(a / b) * y1;
    return [gcd, x, y];
  }
}

console.log(modInverse(3, 7)); // Output: 5
console.log(modInverse(5, 11)); // Output: 9
console.log(modInverse(2, 6));

module.exports = modInverse;
const modInverse = require("./modInverse");

const arrstr =
  "268 413 110 190 426 419 108 229 310 379 323 373 385 236 92 96 169 321 284 185 154 137 186 ";
const arr = arrstr.split(" ").map((n) => Number(n));

// range to make it alphabet uppercase
const upperRange = [0, 25];
// range to make it decimal
const deciRange = [26, 35];
// underscore is 36
const chars = "+ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_".split("");
console.log(chars.length);
const decNums = arr.map((n) => {
  const mod = n % 41;
//   make modular inverse
    const inv = modInverse(mod, 41);
    return chars[inv];
});

console.log(decNums);
const decStr = decNums.join("");
console.log(decStr);

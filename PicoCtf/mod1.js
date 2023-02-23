// make array from this 54 396 131 198 225 258 87 258 128 211 57 235 114 258 144 220 39 175 330 338 297 288
const arrstr =
  "54 396 131 198 225 258 87 258 128 211 57 235 114 258 144 220 39 175 330 338 297 288";
const arr = arrstr.split(" ").map((n) => Number(n));

// range to make it alphabet uppercase
const upperRange = [0, 25];
// range to make it decimal
const deciRange = [26, 35];
// underscore is 36
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_".split("");
console.log(chars.length);
const decNums = arr.map((n) => {
  const mod = n % 37;
  return chars[mod];
});

console.log(decNums);
const decStr = decNums.join("");
console.log(decStr);

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input.shift();
let set = new Set(input);
let arr = [...set].sort((a, b) => a.length - b.length || a.localeCompare(b));
let result = "";
arr.forEach((i) => (result += `${i}\n`));
console.log(result.trim());

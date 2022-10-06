const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => +i);

let num = input.shift();
let result = "";
let arr = input.sort((a, b) => a - b);
for (let i = 0; i < num; i++) {
  result += arr[i] + "\n";
}
console.log(result.trim());

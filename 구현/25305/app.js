const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let person = input[0].split(" ")[0];
let limit = input[0].split(" ")[1];
let score = input[1];
let result = score
  .split(" ")
  .sort((a, b) => b - a)
  .map((v) => +v);

console.log(result[limit - 1]);

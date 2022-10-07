const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let result = input.sort((a, b) => b - a);
console.log(parseInt(result[1]));

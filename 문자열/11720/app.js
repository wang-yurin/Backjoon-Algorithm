const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

var num = parseInt(input[0]);
var sum = 0;
for (let i = 0; i < num; i++) {
  var arr = input[1].split("").map((v) => +v);
  sum += arr[i];
}
console.log(sum);

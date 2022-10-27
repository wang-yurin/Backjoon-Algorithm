const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

// 0번째 피보 0
// 1번째 피보 1
// 2번째 피보 0 + 1 = 1
// 3번째 피보 1 + 1 = 2
// 4번째 피보 1 + 2 = 3
// 5번째 피보 2 + 3 = 5
// 10번째 피보 f9 + f8
const num = Number(input);
function fibo(num) {
  if (num < 2) return num;
  return fibo(num - 1) + fibo(num - 2);
}
console.log(num);

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let result = "";
for (let i = 1; i <= input; i++) {
  result += `${i}\n`;
}
console.log(result.trim());

// for loop 시간초과.. 콘솔로 하나하나 찍으면 시간초과
// 한 번에 출력시켜야함

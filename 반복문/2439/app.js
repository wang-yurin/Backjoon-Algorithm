const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

let num = parseInt(input);
for (let i = 1; i <= num; i++) {
  console.log(" ".repeat(num - i) + "*".repeat(i));
}
// 빈 공간 출력 후에 별이 찍힌다.
// 빈 공간이 줄어들면서 별은 늘어난다.

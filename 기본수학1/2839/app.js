const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let N = parseInt(input);
let five = 0;
let three = 0;

while (true) {
  if (N % 5 === 0) {
    five = N / 5;
    console.log(five + three);
    break;
  }
  if (N < 0) {
    console.log(-1);
    break;
  }
  N = N - 3; // 설탕을 3으로 나눈 것과 같은 의미
  three++;
}
// 최소니까 가장 큰 5kg 먼저 계산

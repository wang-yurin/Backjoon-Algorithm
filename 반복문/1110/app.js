const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

let num = parseInt(input);
let count = 0;

while (true) {
  let sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);
  count++;
  if (parseInt(input) === num) {
    break;
  }
}
console.log(count);
// 입력 받은 수 숫자형으로 바꾸고 변수에 담기. 마지막에 비교하기 위해
// 1의 자리에 있는 수 : % 10
// 10의 자리에 있는 수 : Math.floor(num / 10)
// 1의 자리 수 10의 자리로 만들기 (num % 10) * 10
// 루프 돈 횟수 출력하기
// 55
// 5 + 5 = 10
// 5 + 0 = 5
// 0 + 5 = 5
// 55

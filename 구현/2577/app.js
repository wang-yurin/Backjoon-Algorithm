const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);

let time = String(a * b * c);

for (let i = 0; i <= 9; i++) {
  console.log(time.split(i).length - 1);
}

// 연산 결과를 0~9로 반복하면서 스플릿하고 스플릿한 기준으로 배열 요소가 생기기 때문에 스플릿한 갯수를 세려면 -1 하기

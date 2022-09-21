const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

var num = parseInt(input[0]);
var score = input[1]
  .split(" ")
  .map((i) => +i)
  .sort((a, b) => b - a);

var total = 0;
score.forEach((i) => {
  total += (i / score[0]) * 100;
});
console.log(total / num);

// 과목 개수 변수에 담기
// 점수 공백 제거하고 숫자형 변환하고 오름차순 정렬
// 정렬 된거 반복문 돌리면서 초기화한 변수에 담아서 출력하기
// 오 바로 맞았어

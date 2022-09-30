const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

var [고정비용, 가변비용, 노트북가격] = [input[0], input[1], input[2]];
if (노트북가격 - 가변비용 <= 0) {
  console.log(-1);
} else {
  console.log(Math.floor(고정비용 / (노트북가격 - 가변비용)) + 1);
}

// 이거 다시 풀어보기
// A 고정비용, B 가변비용, C 판매비용
// A+Bx < Cx
// A < Cx - Bx ------> A < (C - B)x
// C가 B보다 커야 손익분기점 넘은것
// 고정비용에 가변누적비용 더한것이 판매누적비용보다 작을 때 손익 분기점 넘긴거
// 조건이 21억있어서 반복문 노노

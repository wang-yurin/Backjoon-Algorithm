const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

// 알파벳이 담겨있는 배열을 만들어야 할 듯?
// 그걸 반복문 돌려서 인풋에 있는 값이 알파벳 배열에 있으면 그 인덱스 출력하는 방식
// findIndex 배열의 첫 번째 요소 인덱스 반환, 없으면 -1 반환
// 시간이 오래걸림
var alpahabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
input = input.split("");
var index = [];
for (let i = 0; i < alpahabet.length; i++) {
  // 인풋 요소에 알파벳배열 요소와 일치하면 푸시해!
  index.push(input.findIndex((elem) => elem === alpahabet[i]));
}
console.log(index.join(" "));

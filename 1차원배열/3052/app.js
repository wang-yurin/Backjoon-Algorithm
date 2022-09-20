const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => +item);

let arr = [];
for (let i = 0; i < input.length; i++) {
  arr.push(input[i] % 42);
}
let result = new Set(arr);
console.log(result.size);

// 빈 배열을 만들어서 나머지를 담은 값 들을 push
// 반복문을 통해 변수끼리 비교하면서 다르면 카운트
// 반복문을 두 개 사용했는데 줄일 수 있는 방법은 무엇일까?

// 아 set을 이용해서 중복을 제거하는 생각을 왜 못했을까?
// 코드를 줄이는 방향도 생각해보자

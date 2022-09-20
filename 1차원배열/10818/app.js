const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let nums = input[1].split(" ").map((item) => +item);
let min = Math.min(...nums);
let max = Math.max(...nums);
console.log(min, max);

// 배열에 담긴 nums를 스프레드 문법을 통해 풀어주고
// 최댓값, 최솟값을 출력한다.
// 제출을 하니 맞았기는 했는데 검사 시간이 오래 걸리는 듯하다.

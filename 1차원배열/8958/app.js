const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

var num = parseInt(input[0]);
for (let i = 1; i <= num; i++) {
  let count = 0;
  let sum = 0;

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      count++;
    } else {
      count = 0;
    }
    sum += count;
  }
  console.log(sum);
}

// 배열안 요소 문자열 스플릿 하고 (아 문자열은 인덱싱이 가능하니까 스플릿 굳이 필요없음)
// 반복하면서 O가 나오면 카운트, X가 나오면 카운트 중단
// 근데 카운트를 했다가 X 다음에 O가 나올 경우 누적을하는게 아니라 다시 카운트 해야함

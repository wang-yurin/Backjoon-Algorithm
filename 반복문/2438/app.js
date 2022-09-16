const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

let num = parseInt(input);
let star = "";
for (let i = 0; i < num; i++) {
  star += "*";
  console.log(star);
}

// 별 찍는 for문안에 중첩으로 개행 담당 for문을 사용했는데 마지막에 개행이 추가되어 틀렸다고 나왔다.
// for문 하나로 별을 누적해가면서 출력하는 방법도 있었음
// (근데 이 방법은 찍고 출력하고 찍고 출력하고 하는 식이라 숫자가 커지면 속도가 느리지 않을까? 고민이 된다.)

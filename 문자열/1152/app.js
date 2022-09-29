const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

var arr = input.split(" ");
if (arr[0] === "") {
  arr.pop();
}
console.log(arr.length);

// console.log(input.split(" ").length);
// 이렇게만 했을 때 틀린 이유가 아무런 단어 없이 공백만 있을 때 배열의 길이가 0이 아닌 1이 출력되어서 그렇다.
// 이런 테스트 케이스 생각하는게 어렵다고 느낌.
// 입력 된 값이 공백 하나인 경우 제외하고 순수 단어만 파악해야함

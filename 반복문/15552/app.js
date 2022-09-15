const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let result = "";
for (let i = 1; i <= input[0]; i++) {
  let numbers = input[i].split(" ");
  result += Number(numbers[0]) + Number(numbers[1]) + "\n";
}
console.log(result);

// splice 사용해서 코드의 양 줄임
// 기존 for문 사용했던 걸 forEach를 사용해보았음
// 음 시간초과~
// 테스트케이스가 최대 1,000,000개가 나오는 상황
// 하나의 문자열에 결과값과 개행 문자를 넣어 마지막에 출력해야 한다고한다.
// forEach를 했을 때 시간초과 계속 나왔다. forEach가 빠를 것 같았는데 for문이 더 빨랐던걸까?

/*
기존 작성한 코드

input.splice(0, 1);
input.forEach((i) => {
  let result = i.split(" ");
  console.log(+result[0] + +result[1]);
});
*/

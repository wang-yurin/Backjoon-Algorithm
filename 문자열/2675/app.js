const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

var testCaseNum = parseInt(input[0]);

for (let i = 0; i < testCaseNum; i++) {
  // 테스트케이스 반복 숫자와 문자열 공백 제거
  var testCase = input[i + 1].split(" ");
  var result = "";
  // 테스트케이스 반복
  for (let j = 0; j < testCase[1].length; j++) {
    // 테스트케이스 문자열의 인덱스를 반복하면서 repeat함수로 문자열 반복
    result += testCase[1][j].repeat(parseInt(testCase[0]));
  }
  console.log(result);
}

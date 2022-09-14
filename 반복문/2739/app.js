/*
구구단

문제
N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.

입력
첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 9보다 작거나 같다.

출력
출력형식과 같게 N*1부터 N*9까지 출력한다.
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

const num = parseInt(input, 10);
for (let i = 1; i < 10; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}

// for문과 템플릿 리터럴을 사용해서 코드 작성
// 구구단 뒤에 곱해지는 수가 1부터 시작하기 때문에 반복문 조건을 1부터 시작하는 걸로 작성

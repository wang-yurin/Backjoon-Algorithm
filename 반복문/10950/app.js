/*
A+B

문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 테스트 케이스의 개수 T가 주어진다.

각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
각 테스트 케이스마다 A+B를 출력한다.
*/
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

for (i = 1; i <= input[0]; i++) {
  let arr = input[i].split(" ");
  console.log(parseInt(arr[0]) + parseInt(arr[1]));
}

// input 배열 인덱스0에는 테스트 케이스의 숫자가 들어가기 때문에
// 그 다음 인덱스부터(그렇기 때문에 for문 조건을 i=1) 순회를 하면서 공백을 제거하고 배열을 만들어준다.
// 생성된 배열 안 요소들이 문자열이기 때문에 숫자형으로 형변환 한다.
// 생성된 배열로 값을 더해준다.

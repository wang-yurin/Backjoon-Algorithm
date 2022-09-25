const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

var num = parseInt(input[0]);
for (let i = 1; i <= num; i++) {
  // 테스트 케이스 숫자
  var test = input[i].split(" ").map((v) => +v);
  // 초기화
  var sum = 0;
  var count = 0;
  // 점수 합산 반복문
  for (let j = 1; j < test.length; j++) {
    sum += test[j];
  }
  // 점수 평균
  var average = sum / test[0];
  // 점수 배열 반복하면서 평균 이상이면 카운트하기
  for (let k = 1; k < test.length; k++) {
    if (average < test[k]) {
      count++;
    }
  }
  console.log(`${((count / test[0]) * 100).toFixed(3)}%`);
}

// 소수점 셋째 자리까지 출력하는 메서드 toFixed(자릿수))
// 문제를 평균 내는 것으로만 잘못 이해했는데 평균 점수를 넘은 학생들의 비율을 구해야했었다.

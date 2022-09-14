/*
합

문제
n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

출력
1부터 n까지 합을 출력한다.
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let result = 0;
for (let i = 1; i <= input[0]; i++) {
  result = result + i;
}
console.log(result);
// 처음에 let result = 0을 for문 안에 넣어서 출력이 제대로 되지 않았었다.
// 두자리 수를 넣으니 결과가 제대로 나오지 않았다. // split을 넣지 않아서 입력의 문제;;

/*
for문이 아닌 공식을 이용한 방법(for문을 이용한 것보다 속도가 빨라 숫자가 많이 커질 경우를 생각하면 좋음)
let n = parseInt(input);
console.log((n * (n + 1)) / 2);
*/

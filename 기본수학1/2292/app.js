const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

var count = 1; // 1부터 출발하니까
var sum = 1;
while (sum < input) {
  sum += 6 * count;
  count++;
}
console.log(count);

// 규칙 찾기?
// 일단 1을 기준으로 어떤 규칙이 있는가 살펴보았음
// 6의 배수로 커지는 듯

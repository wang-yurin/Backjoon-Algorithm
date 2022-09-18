const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let n = input[0].split(" ")[0];
let x = input[0].split(" ")[1];
let nums = input[1].split(" ");
let result = [];
for (let i = 0; i < n; i++) {
  if (parseInt(nums[i]) < x) {
    result.push(nums[i]);
  }
}
console.log(...result);

// 입력 값 두 줄이니까 split('\n)으로 나누고
// 첫 번째 줄, 두 번째 줄 각 배열의 공백으로 나누어진 숫자들 쪼개서 배열에 담기
// for문으로 숫자들 돌면서 x의 값과 비교하여 작으면 빈 배열에 push
// push한 것들이 배열에 담겨 있으니 spread operator를 이용하여 배열을 벗김

// if문 조건에 nums[i]만 했었을 때 1, 10이 출력 되었는데 10이 출력 된 이유가 유니코드 때문에 출력이 된 것 같다.
// parseInt를 이용해 숫자형으로 바꾼 후 조건을 만족시켰다.

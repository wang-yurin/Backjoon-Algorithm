const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 0; i < input.length; i++) {
  let arr = input[i].split(" ").map((i) => +i);
  if (arr[0] === 0 && arr[1] === 0) break;
  console.log(arr[0] + arr[1]);
}

// input 마지막에 0 0이 있어서 이거 빼내야함 Pop을 썼는데 틀렸다고 나옴 쓰면 안되는건가?
// 아 입력값이 마지막에 0 0이 아닐 경우와 중간에 0 0이 있는 그런 케이스를 생각하면 적절하지 않은 조건인 듯 하다.
// 마지막이 아니라 중간에 0 0이 들어올 거 생각해서 0 0을 뛰어 넘고 출력하라고 continue를 사용했는데 틀렸다고 나옴
// 백준에서 원한건 0 0 을 만났을 때 멈춰야 하는거였나보다 break 사용하니까 통과

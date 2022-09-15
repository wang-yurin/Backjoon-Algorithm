const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let num = input[i].split(" ");
  console.log(`Case #${i}: ${parseInt(num[0]) + parseInt(num[1])}`);
}

// for 조건부분을 let i = 1; i < input.length; i++로 했을 때 주어진 테스트 케이스는 출력이 되었는데 추가적인 테스트 케이스에서는 통과를 못했는지 틀렸다고 나온다.
// 조건이 뭐가 잘못 된 것인지 아직 파악을 못했다.

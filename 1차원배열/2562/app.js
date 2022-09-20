const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((item) => +item);

let max = Math.max(...input);
for (let i = 0; i < input.length; i++) {
  if (max === input[i]) {
    console.log(`${max}\n${+i + 1}`);
  }
}
// sort를 사용해서 정렬 시킨 후에 아 정렬시키면 안되겠다. 해당 자리를 찾아야하니까
// Math.max를 사용해서 최댓값을 찾고 반복문을 통해 그 값이 input 요소의 값과 일치하는지 확인하고 그 자리를 출력하면 되지 않을까?
// Math.max 사용하려면 배열에 담겨있지 말자. 스프레드 문법을 사용하여 최댓값 뽑아내기
// 몇 번째 자리 수인거니까 인덱스 +1 값을 출력하자.

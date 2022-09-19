const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
for (let i = 0; i < input.length; i++) {
  let num = input[i].split(" ");
  console.log(parseInt(num[0]) + parseInt(num[1]));
}

// EOF (End of file)
// 더이상 읽어올 데이터가 없음, 데이터를 입력하는 반복문에서 데이터를 입력하지 않으면 끝내는 것
// for문 틀린게 없어서 찾아보았는데 이 문제에서 마지막 개행 문자도 input 배열에 저장되어있어서 trim을 사용하거나 input.length - 1을 해주어야 해결된다 한다.
// 개행문자가 input에 들어가는걸 console로 확인이 안되는데 이부분이 좀.. 이상하다.
// length로 출력했을 때도 5로 되는데?

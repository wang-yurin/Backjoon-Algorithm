const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCase = parseInt(input[0]);
for (let i = 1; i <= testCase; i++) {
  let test = input[i].split(" ").map((v) => +v);
  let H = test[0];
  let W = test[1];
  let N = test[2];

  if (H >= N) {
    console.log(`${N}01`);
  } else {
    let floor = N % H === 0 ? H : N % H;
    let room = Math.ceil(N / H);

    console.log(room < 10 ? `${floor}0${room}` : `${floor}${room}`);
  }
}

// T 개 테스트
// H 호텔 층 수, W 각 층의 방 수, N 몇 번째 손님
// N % H = 숙박 층(층 수가 제한되어 있으니까 손님이 차면 다음 호수로 넘어가야함, 몫이 호수가되고 나머지가 층이 됨)
// N / H = 숙박 호수 (몫이 호수임) 올림 처리(호수가 1부터 시작하니까)

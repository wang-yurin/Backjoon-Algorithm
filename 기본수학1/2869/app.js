const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const V = parseInt(input[2]);

console.log(Math.ceil((V - B) / (A - B)));

// A - B는 1일 올라가는 높이
// V - B 도착 하루 전 최종적으로 올라가는 높이
// 소숫점 나오면 하루 더 필요한거니까 올림처리

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

var arr = input.split(" ");
var one = parseInt(arr[0].split("").reverse().join(""));
var two = parseInt(arr[1].split("").reverse().join(""));

one > two ? console.log(one) : console.log(two);
// 인풋 공백 제거
// 숫자 나누어서 순서 바꾸기
// 합치기
// 문자열이니까 숫자형으로 바꾸기
// 두 수 비교하기

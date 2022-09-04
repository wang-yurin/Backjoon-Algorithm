/*
곱셈

(세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
(1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.

출력
첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let firstLine = input[0].split("");
let secondLine = input[1].split("");
let thirdLine = parseInt(input[0]) * secondLine[secondLine.length - 1];
let fourth = parseInt(input[0]) * secondLine[secondLine.length - 2];
let fifth = parseInt(input[0]) * secondLine[secondLine.length - 3];
let sixth = parseInt(firstLine.join("")) * parseInt(secondLine.join(""));

console.log(thirdLine);
console.log(fourth);
console.log(fifth);
console.log(sixth);

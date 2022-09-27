const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

var num = parseInt(input[0]);
var count = 0;

for (let i = 1; i <= num; i++) {
  var arr = String(i);
  if (i < 100) {
    count++;
  }
  var a = parseInt(arr[0]) - parseInt(arr[1]);
  var b = parseInt(arr[1]) - parseInt(arr[2]);
  if (a === b) {
    count++;
  }
}
console.log(count);

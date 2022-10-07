const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let star = "";
for (let i = input; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star.trim());

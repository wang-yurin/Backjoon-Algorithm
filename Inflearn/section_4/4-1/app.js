console.time();

function solution(arr) {
  let result = [];
  let temp = 0;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i].toString().split('');
    let sum = 0;
    for (let j = 0; j < num.length; j++) {
      sum += parseInt(num[j]);
    }
    if (temp <= sum) {
      temp = sum;
      result.push(arr[i]);
    }
  }
  console.log(Math.max(...result));
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
console.timeEnd();

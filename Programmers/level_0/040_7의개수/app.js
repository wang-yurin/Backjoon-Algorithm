function solution(array) {
  var count = 0;
  var num = array
    .join("")
    .split("")
    .map((v) => +v);
  num.forEach((i) => {
    if (i === 7) {
      count++;
    }
  });
  return count;
}

// 7을 split 하는 방법
// filter 사용하는 방법

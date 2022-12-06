function solution(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    isComp(i) ? count++ : null;
  }
  return count;
}

function isComp(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    num % i === 0 ? count++ : null;
  }
  return count >= 3 ? true : false;
}

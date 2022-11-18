function solution(x, n) {
  const numArray = [];
  for (let i = 1; i <= n; i++) {
    const num = x * i;
    numArray.push(num);
  }
  return numArray;
}

/*
다른 풀이
function solution(x, n) {
  return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
*/

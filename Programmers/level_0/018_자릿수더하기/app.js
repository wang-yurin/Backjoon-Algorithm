function solution(n) {
  let result = String(n)
    .split("")
    .map((v) => +v)
    .reduce((a, b) => a + b);
  return result;
}

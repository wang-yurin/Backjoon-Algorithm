function solution(n) {
  let x = 3;
  while (n % x !== 1) {
    x++;
  }
  return x;
}

function solution(n) {
  let sumNumber = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) sumNumber += i;
  }
  return sumNumber;
}

function solution(num) {
  if (num === 1) return 0;

  let count = 0;
  function collatz(result) {
    if (result === 1) return count;
    result % 2 === 0 ? collatz(result / 2) : collatz(result * 3 + 1);
    count++;
  }
  collatz(num);

  return count >= 500 ? -1 : count;
}

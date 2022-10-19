function solution(order) {
  return String(order)
    .split("")
    .map((v) => +v)
    .filter((n) => n === 3 || n === 6 || n === 9).length;
}

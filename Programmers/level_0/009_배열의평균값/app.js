function solution(numbers) {
  let result = numbers.reduce((a, b) => a + b) / numbers.length;
  return result;
}

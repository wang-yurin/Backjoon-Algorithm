function solution(my_string) {
  return my_string
    .split("")
    .filter((v) => Number(v))
    .map((v) => +v)
    .reduce((a, b) => a + b);
}

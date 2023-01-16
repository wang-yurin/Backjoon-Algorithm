function solution(my_string) {
  const regexp = /[a-zA-Z]/gi;
  return my_string
    .split(regexp)
    .map((v) => +v)
    .reduce((a, b) => a + b, 0);
}

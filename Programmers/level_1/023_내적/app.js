function solution(a, b) {
  let dotProArr = a.map((v, i) => {
    return v * b[i];
  });
  return dotProArr.reduce((acc, cur) => acc + cur, 0);
}

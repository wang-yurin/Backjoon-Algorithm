function solution(num, k) {
  var answer = String(num)
    .split("")
    .map((v) => +v)
    .indexOf(k);
  answer === -1 ? -1 : (answer += 1);
  return answer;
}

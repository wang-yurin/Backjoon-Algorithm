function solution(money) {
  var answer = [];
  var s = Math.floor(money / 5500);
  var r = Math.floor(money % 5500);
  answer.push(s);
  answer.push(r);
  return answer;
}

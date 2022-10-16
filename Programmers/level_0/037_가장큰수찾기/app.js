function solution(array) {
  var maxNum = Math.max(...array);
  var answer = [maxNum];
  for (let i in array) {
    maxNum === array[i] ? answer.push(Number(i)) : answer;
  }
  return answer;
}

// indexOf로 찾는 방법이 있는데 생각이 안남..내 방법은 효율적이지 못한 듯
// function solution(array) {
//     let max = Math.max(...array);
//     return [max, array.indexOf(max)];
// }

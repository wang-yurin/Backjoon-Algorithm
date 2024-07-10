console.time();

function solution(str) {
  let count = 1;
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i];
      if (count > 1) {
        result += count;
      }
      count = 1;
    }
  }
  return result;
}

let str = 'KKHSSSSSSSE';
console.log(solution(str));
console.timeEnd();

/**
 * 문자열 길이는 100을 넘지 않는다.
 * 같은 문자가 연속으로 반복되면 문자 오른쪽에 반복 횟수를 표기
 * 반복 횟수가 1이면 표기하지 않음
 */

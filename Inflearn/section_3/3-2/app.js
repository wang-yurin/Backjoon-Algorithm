console.time();

function solution(str) {
  let result = '';
  let input = str.replaceAll(/[^a-zA-Z]/g, '').toLowerCase();

  input === input.split('').reverse().join('')
    ? (result += 'YES')
    : (result += 'NO');

  return result;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
console.timeEnd();

/**
 * 알파벳 이외의 문자들을 무시한다.
 * 대소문자 구분하지 않는다.
 * 정규식을 이용하여 알파벳 이외의 문자들을 제거한다.(/[^a-zA-Z]/g)
 */

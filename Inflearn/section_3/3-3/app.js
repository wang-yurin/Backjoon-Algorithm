console.time();

function solution(str) {
  let result = '';
  let input = str.replaceAll(/[^0-9]/g, '');

  return !isNaN(parseInt(input)) ? (result = parseInt(input)) : result;
}

// let str = 'noNumbersHere';
let str = 'g0en2T0s8eSoft';
console.log(solution(str));
console.timeEnd();

/**
 * 숫자만 추출한다.
 * 정규식을 이용하여 숫자 이외의 문자들을 제거한다.(/[^0-9]/g)
 * 예외처리 => 문자열에 숫자가 없을 때 빈 문자열 출력
 */

console.time();
const arr = [12, 20, 54, 30, 87, 91, 30];

function solution(day, arr) {
  let count = 0;

  arr.forEach((element) => {
    let num = element.toString().split('');
    num[1] == day ? count++ : count;
  });

  return count;
}

console.log(solution(0, arr));
console.timeEnd();

/*
자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자(day) 일치 여부 판별
arr 배열의 각 요소 끝 자리 숫자만 뽑아내어 n과 비교하기
요소 1번째 인덱스와 n이 같으면 count 1 증가
*/

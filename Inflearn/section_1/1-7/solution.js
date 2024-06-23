console.time();
const arr = [12, 20, 54, 30, 87, 91, 30];

function solution(day, arr) {
  let count = 0;

  arr.forEach((element) => {
    // 요소의 일의 자리 숫자 추출
    let lastDigit = element % 10;

    // 일의 자리 숫자가 날짜와 일치하면 카운트 증가
    if (lastDigit === day) {
      return count++;
    }
  });

  return count;
}

console.log(solution(0, arr));
console.timeEnd();

/*
arr 배열의 각 요소 끝 자리 숫자만 뽑아내어 n과 비교하는 방법을 생각해서 toString().split('')을 사용하여 숫자를 문자열로 변환한 후 분할하는 방법을 사용했는데 이는 다소 비효율적인 방법이었다.

숫자의 일의 자리 숫자를 추출하는 더 간단한 방법은 % 10을 사용하기
*/

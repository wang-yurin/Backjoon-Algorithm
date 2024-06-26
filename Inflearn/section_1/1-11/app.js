console.time();
function solution(str) {
  let count = 0;

  [...str].forEach((element) => {
    if (element.charCodeAt(0) >= 65 && element.charCodeAt(0) <= 90) {
      count++;
    }
  });

  return count;
}

let str = 'KoreaTimeGood';
console.log(solution(str));
console.timeEnd();

/*
문자열 반복문을 돌려 A-Z 유니코드 범위에 존재 여부를 판별
A: 65 ~ Z: 90
범위 안에 있으면 count++

forEach를 사용하기 위해 spread operator 사용
*/

console.time();
/*
개선 전

function solution(str) {
  let result = [];
  [...str].forEach((element) => {
    if (element.toUpperCase() === element) {
      result.push(element.toLowerCase());
    } else if (element.toLowerCase() === element) {
      result.push(element.toUpperCase());
    }
  });
  return result.join('');
}
*/

function solution(str) {
  let result = [...str].map((element) => {
    return element.toUpperCase() === element
      ? element.toLowerCase()
      : element.toUpperCase();
  });

  return result.join('');
}

let str = 'StuDY';
console.log(solution(str));
console.timeEnd();

/*
처음 forEach를 사용했는데 반환 값이 없기 때문에 새로운 배열을 정의하고 그 배열에 요소를 추가하는 과정이 들어가는데, map을 사용하면 새로운 배열을 반환하기 때문에 map을 사용하도록 개선하기

if 조건문의 표현식을 간단하게 처리하도록 개선하기
*/

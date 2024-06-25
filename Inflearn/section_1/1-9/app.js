console.time();
function solution(str) {
  return str.replaceAll('A', '#');
}

let str = 'BANANA';
console.log(solution(str));
console.timeEnd();

/*
대문자로 이루어진 값이 들어온다.

[고민해볼 만한 것들]
1. str이 항상 대문자로 들어오는가?
2. 대문자로 들어오지 않는 소문자가 포함된 문자열을 전체 대문자로 치환하기
3. 영문이 아닌 다른 문자가 들어왔을 때 처리 방법
4. 정규표현식으로 푸는 방법
5. 대치 문자를 파라미터로 받아서 해결하는 방법
*/

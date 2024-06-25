console.time();
function solution(str, char) {
  return str.split(char).length - 1;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
console.timeEnd();

/*
첫 번째 파라미터로 한 개의 문자열, 두 번째 파라미터로 특정 문자를 입력 받는다. 

생각한 방법
1. 문자열을 순회하면서 특정 문자가 일치하는 것이 있으면 카운터를 올리며 판별한다.
2. split() 메소드를 사용하여 특정 문자열로 자른 뒤 반환된 배열의 길이로 판별한다. 

[고민한 것들]
1. str이 항상 대문자로 들어오는가?
2. 대문자로 들어오지 않는 소문자가 포함된 문자열을 전체 대문자로 치환하기
3. 영문이 아닌 다른 문자가 들어왔을 때 처리 방법
4. 정규표현식으로 푸는 방법
*/

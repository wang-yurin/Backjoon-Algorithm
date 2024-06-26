console.time();
function solution(arr) {
  let result = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (result.length < arr[i].length) {
      result = arr[i];
    }
  }
  return result;
}

const arr = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(arr));
console.timeEnd();

/*
arr 배열의 0번 인덱스를 기준으로 각 요소를 순회하면서 요소의 길이를 판별하여 비교한다.
기준 값을 저장할 변수를 생성한다.

가장 긴 문자열이 여러개 있으면 어떤 것을 반환?
- 모두 다 반환?
- 제일 앞의 문자만 반환?
*/

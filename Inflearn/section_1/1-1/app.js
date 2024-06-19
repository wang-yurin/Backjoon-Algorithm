function solution(A, B, C) {
  let result;

  if (A < B) {
    result = A;
  } else {
    result = B;
  }

  if (C < result) {
    result = C;
  }

  return result;

  /*
  처음에 두 번째 if문을 아래와 같이 작성함.
  result = result; 는 불필요하다.

  if (result < C) {
    result = result;
  } else {
    result = C;
  }
  */
}

console.log(solution(6, 5, 11));

/*
파라미터로 받은 세 개의 숫자 A, B, C
작은 수를 담는 변수 생성 (result)
A와 B를 비교하여 작은 수를 result에 담기
result 값과 C를 비교하여 작은 수 result에 담기
result 리턴하기
*/

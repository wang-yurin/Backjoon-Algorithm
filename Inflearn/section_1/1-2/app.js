function solution(A, B, C) {
  const total = A + B + C;
  const maxNum = Math.max(A, B, C);
  const remainNum = total - maxNum;

  if (maxNum < remainNum) {
    return 'YES';
  } else {
    return 'NO';
  }

  /*
  삼항연산자를 통해 코드를 간결하게 할 수 있다.
  return maxNum < remainNum ? 'YES' : 'NO';
  */
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));

/*
삼각형을 만들 수 있는 조건이 무엇인가?
두 변의 길이의 합이 나머지 한 변의 길이보다 크면 만들 수 있음, 작으면 만들 수 없음

세 수를 더한 후 최댓값을 뺀 수(나머지)와 최댓값을 비교했을 때 나머지 값이 크면 삼각형 만들 수 있음, 작으면 만들 수 없음
1. 세 수를 더한 값을 변수에 저장한다. (total)
2. 세 수 중 최댓값을 변수에 저장한다. (maxNum)
3. 세 수를 더한 값(total)에서 최댓값(maxNum)을 뺀 수를 변수에 저장한다. (remainNum)
4. remainNum 값과 maxNum 값을 비교한다.
*/

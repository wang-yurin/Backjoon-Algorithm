function solution(N) {
  let result = 0;

  for (let i = 1; i <= N; i++) {
    result += i;
  }
  return result;
}

console.log(solution(6));
console.log(solution(10));

/*
변수(result)에 1부터 N까지의 합을 저장한다.
반복문을 돌려 합을 출력한다.
*/

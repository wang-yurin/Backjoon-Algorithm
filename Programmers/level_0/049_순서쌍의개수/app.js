function solution(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      result++;
    }
  }
  return result;
}

// var answer = 0;
// for(let i = 1; i <= n; i++) {
//     for(let j = n; j > 1; j--) {
//         if(i * j === n) { answer += 1 }
//     }
// }
// return answer + 1
// for문 두 개 돌려서 테스트 3,5,6 시간초과

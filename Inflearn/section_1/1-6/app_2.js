console.time();

const list = [12, 77, 38, 41, 53, 92, 85];
function solution(list) {
  // 홀수만 필터링
  const oddList = list.filter((num) => num % 2 !== 0);

  // 홀수들의 합 계산
  const sumOdd = oddList.reduce((sum, num) => sum + num, 0);

  // 홀수들 중 최소값 찾기
  const minOdd = Math.min(...oddList);

  return [sumOdd, minOdd];
}

console.log(solution(list));
console.timeEnd();

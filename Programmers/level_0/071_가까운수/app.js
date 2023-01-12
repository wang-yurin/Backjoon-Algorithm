// 이 풀이는 테스트 케이스 5번에서 실패
// 가장 가까운 수가 여러 개일 경우 더 작은 수를 리턴해야하는 조건에 걸리는 것 같다.
/*
function solution(array, n) {
  array.sort((a, b) => Math.abs(a - n) - Math.abs(b - n));
  return array[0];
}
*/

function solution(array, n) {
  array.sort((a, b) => {
    let diffA = Math.abs(a - n);
    let diffB = Math.abs(b - n);
    if (diffA === diffB) {
      return a - b; // 같은 거리가 여러개 일 때 작은 수부터 정렬
    }
    return diffA - diffB;
  });
  return array[0];
}

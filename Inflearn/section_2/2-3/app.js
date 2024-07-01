console.time();
function solution(num, a, b) {
  let result = [];

  for (let i = 0; i < num; i++) {
    if (a[i] === b[i]) result.push('D');
    else if (b[i] === 3 && a[i] === 1) result.push('A');
    else if (b[i] === 1 && a[i] === 3) result.push('B');
    else if (a[i] < b[i]) result.push('B');
    else if (a[i] > b[i]) result.push('A');
  }
  return result.join('\n');
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(5, a, b));
console.timeEnd();

/**
 * 가위: 1, 바위: 2, 3: 보
 * 결과를 저장할 배열을 선언한다.
 * a와 b 배열의 같은 인덱스끼리 비교한다.
 * 비교하여 이겼을 때 각 회차의 승자와 비겼을 때 D를 결과 배열에 저장한다.
 */

console.time();

function solution(s, t) {
  let n = s.length;
  let distance = new Array(s.length).fill(Infinity);
  let lastPos = -1;

  // 왼쪽에서 오른쪽
  for (let i = 0; i < n; i++) {
    if (s[i] === t) {
      lastPos = i;
    }
    if (lastPos !== -1) {
      distance[i] = i - lastPos;
    }
  }

  // 오른쪽에서 왼쪽
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === t) {
      lastPos = i;
    }
    if (lastPos !== -1) {
      distance[i] = Math.min(distance[i], lastPos - i);
    }
  }
  console.log(distance);
}

let str = 'teachermode';
console.log(solution(str, 'e'));
console.timeEnd();

/**
 * 문자열 s의 길이를 구하고, 거리 값을 저장할 배열을 초기화한다.
 * 왼쪽에서 오른쪽으로 스캔
 * 오른쪽에서 왼쪽으로 스캔
 * 기존의 거리 배열 값과 비교하여 더 작은 값을 선택한다.
 *
 * fill(Infinity)를 하지 않았을 때 결과가 다른 이유
 */

console.time();

function solution(arr) {
  let high = [];
  let n = arr.length;

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < 4; k++) {
        let x = i + dx[k];
        let y = j + dy[k];
        if (x >= 0 && x < n && y >= 0 && y < n && arr[x][y] >= arr[i][j]) {
          console.log(arr[i][j], arr[x][y]);
          high.push(arr[i][j]);
          break;
        }
      }
    }
  }
  console.log(high);
  return n * n - high.length;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
console.timeEnd();

/**
 * 현재 좌표 기준으로 주변 좌표 탐색 필요
 * dx, dy
 */

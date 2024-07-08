console.time();
function solution(arr) {
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let rowSum = 0;
    let colSum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      rowSum += arr[i][j];
      colSum += arr[j][i];
    }
    if (maxSum < rowSum) maxSum = rowSum;
    if (maxSum < colSum) maxSum = colSum;
  }

  let diaSum = 0;
  let reverseDiaSum = 0;
  for (let i = 0; i < arr.length; i++) {
    diaSum += arr[i][i];
    reverseDiaSum += arr[i][arr.length - i - 1];
  }
  if (maxSum < diaSum) maxSum = diaSum;
  if (maxSum < reverseDiaSum) maxSum = reverseDiaSum;

  return maxSum;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

console.log(solution(arr));
console.timeEnd();

/**
 * 행의 합
 * 열의 합
 * 대각선의 합 (오 -> 왼)
 * 대각선의 합 (왼 -> 오)
 * 각 합들을 저장할 배열 생성
 * 각 조건의 합을 구하면서 가장 큰 합을 저장하는 변수 선언
 */

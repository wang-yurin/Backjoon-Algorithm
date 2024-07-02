console.time();
function solution(arr) {
  let totalScore = 0;
  let plusScore = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      plusScore++;
      totalScore += plusScore;
    } else {
      plusScore = 0;
    }
    console.log(`plus: ${plusScore}, total: ${totalScore}`);
  }
  return totalScore;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
console.timeEnd();

/**
 * arr 배열을 순회하면서 각 요소들이 맞았는지, 틀렸는지 확인한다.
 * 현재 요소의 값이 1이면 정답
 * 현재 요소의 값이 0이면 오답
 * 현재 요소의 값이 1이면 가산점을 1점씩 추가하고 그 값을 총점수에 더한다.
 * 현재 요소의 값이 0이면 가산점을 0으로 초기화 한다.
 */

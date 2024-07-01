console.time();
function solution(arr) {
  let count = 1;
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      count++;
      max = arr[i];
    }
    console.log(max);
  }

  return count;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
console.timeEnd();

/**
 * 앞에 서 있는 사람들보다 크면 보이고 작거나 같으면 보이지 않는다.
 * 첫 번째 학생은 무보건 보인다. => 카운트 1로 시작한다.
 * 지금까지 본 학생들 중 가장 큰 키를 max로 초기화한다.
 * 1번째 인덱스부터 시작하며 max와 비교
 * 현재 학생의 키가 max보다 크면 현재 학생은 보인다.
 * max를 현재 학생의 키로 갱신한다.
 */

console.time();

const list = [12, 77, 38, 41, 53, 92, 85];
function solution() {
  let oddList = [];

  // 입력 값에서 홀수를 찾는 함수 작성
  const checkOdd = function (num) {
    if (num % 2 !== 0) {
      oddList.push(num);
    }
  };
  list.forEach(checkOdd);

  // oddList의 홀수들을 모두 더하는 과정 & 최솟값 찾는 과정
  let sumOdd = 0;
  let minOdd = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < oddList.length; i++) {
    sumOdd += oddList[i];

    if (minOdd > oddList[i]) {
      minOdd = oddList[i];
    }
  }
  return [sumOdd, minOdd];
}

console.log(solution(list));
console.timeEnd();

/*
1. 입력을 배열로 받는다.
2. 배열을 순회하면서 홀수를 찾는다.
3. 변수(oddList)를 선언하고 홀수들을 배열에 담아 변수에 저장한다.
4. 홀수들의 합을 저장할 변수(sumOdd)를 선언한다.
5. oddList를 순회하면서 홀수들의 합을 구한다.
6. 홀수들 중 최솟값을 저장할 변수(minOdd)를 선언한다.
7. oddList를 순회하면서 최솟값을 찾는다.
*/

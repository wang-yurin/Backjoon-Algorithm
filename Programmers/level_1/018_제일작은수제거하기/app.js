function solution(arr) {
  const minNum = Math.min(...arr);
  const minNumIndex = arr.indexOf(minNum);
  arr.splice(minNumIndex, 1);

  return arr.length !== 0 ? arr : [-1];
}

// 정렬하지 않는건데 입출력 예시만 보고 내림차순으로 정렬하는 줄 알아서 sort 했는데 코드 실행만 통과하고 제출하니 모두 틀렸다고 나와서 당황했다. 문제 잘 읽자..!

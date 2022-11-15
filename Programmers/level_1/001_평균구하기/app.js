function solution(arr) {
  const sumNumber = arr.reduce((acc, cur) => acc + cur, 0);
  return sumNumber / arr.length;
}

// 예전에 제출한 코드를 보니 forEach를 사용했었다. 몇 개월 지난 뒤에 다시 풀었을 때 reduce를 쓴거면 성장한거겠지? (사용하는 메서드가 다양해짐..!)

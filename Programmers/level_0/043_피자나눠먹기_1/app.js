function solution(n) {
  if (n <= 7) {
    return 1;
  }
  if (n > 7) {
    return Math.ceil(n / 7);
  }
}

// 7명 미만일 때 1판 고정으로 주고싶어서 조건문 넣은건데 필요가 없었다.

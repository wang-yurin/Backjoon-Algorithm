function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3) / 1;
}

// 큰 수로 나눠야 총 마리수가 적게 나오게 나오니까 나눈 몫을 더하기
// 큰 수로 나누고 남은 수를 또 그 다음 큰 수(3)로 나눈다.
// 그 다음 남은 수를 1로 나눈다

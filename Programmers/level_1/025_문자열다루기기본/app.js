function solution(s) {
  if (!(s.length === 4 || s.length === 6)) return false;
  return !/[a-zA-z]/.test(s) ? true : false;
}

// 먼저 문자열 길이 4, 6인지 판별
// 정규표현식 사용하여 알파벳 포함 되어있는지 판단

// 정규표현식 공부 시급...

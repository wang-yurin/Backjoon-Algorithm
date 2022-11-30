function solution(s) {
  let idx = 0;

  if (s.length % 2 === 0) {
    idx = s.length / 2;
    return s.slice(idx - 1, idx + 1);
  } else {
    idx = Math.floor(s.length / 2);
    return s.slice(idx, idx + 1);
  }
}

// 처음에 slice로 잘라내는 것만 생각했는데 문자열 인덱스로 접근하는 방법도 있었다.
/*
function solution(s) {
  let idx = 0
  
  if (s.length % 2 === 0) {
    idx = s.length / 2
    return s[idx-1] + s[idx]
  } else {
    idx = Math.floor(s.length / 2)
    return s[idx]
  }
}

// 한번 더 개선한 코드
function solution(s) {
  const idx = Math.floor(s.length / 2)
    
  return s.length % 2 === 0 ? s[idx-1] + s[idx] : s[idx]
}
*/

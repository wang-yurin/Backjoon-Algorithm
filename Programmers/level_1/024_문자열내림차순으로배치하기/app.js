function solution(s) {
  return s
    .split('')
    .map((v) => v.charCodeAt())
    .sort((a, b) => b - a)
    .map((v) => String.fromCodePoint(v))
    .join('');
}

// function solution(s) {
//   return s.split('').sort().reverse().join('')
// }

// 첫 번째 방법으로 풀었는데 아래와 같이 했어도 됐다.

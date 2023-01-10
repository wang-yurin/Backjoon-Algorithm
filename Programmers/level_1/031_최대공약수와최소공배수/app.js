// 최대 공약수
function gcd(n, m) {
  // 유클리드 호제법
  // 큰 수를 작은 수로 나눈다.
  // 나누는 수를 나머지로 계속 나눈다.
  // 나머지가 0이 나오면 나누는 수가 최대 공약수

  let remainder = n % m;
  if (remainder === 0) return m;
  return gcd(m, remainder);
}

// 최소 공배수
function lcm(n, m) {
  return (n * m) / gcd(n, m);
}

function solution(n, m) {
  return [gcd(n, m), lcm(n, m)];
}

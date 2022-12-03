function solution(left, right) {
  let result = 0;

  function divisor(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      num % i === 0 ? count++ : count;
    }

    count % 2 === 0 ? (result += num) : (result -= num);
    // return count
  }

  while (left <= right) {
    divisor(left);
    left++;
  }
  return result;
}

// 약수 개수를 구하는 divisor함수 만들고 그 안에서 약수의 개수가 짝수면 result에 더하고 홀수면 result에서 뺌

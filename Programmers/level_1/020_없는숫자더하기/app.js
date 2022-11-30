function solution(numbers) {
  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  numbers.sort().map((v, i) => {
    const index = num.indexOf(v);
    num.splice(index, 1);
  });
  return num.reduce((acc, cur) => acc + cur, 0);
}

// 45에서 numbers에 있는 값 reduce하고 뺀 풀이를 보았다. 놀라움... 단순히 수학적으로 접근할 생각을 하지 못해서 아쉽다..!

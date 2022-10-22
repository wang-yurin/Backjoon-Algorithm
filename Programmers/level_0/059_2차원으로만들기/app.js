function solution(num_list, n) {
  let result = [];
  for (let i = 0; i < num_list.length / n; i++) {
    result.push(num_list.slice(i * n, (i + 1) * n));
  }
  return result;
}

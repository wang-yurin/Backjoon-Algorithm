function solution(arr, divisor) {
  const filterArray = [];
  arr.map((num) => {
    num % divisor === 0 ? filterArray.push(num) : null;
  });

  if (filterArray.length === 0) {
    filterArray.push(-1);
  }
  return filterArray.sort((a, b) => a - b);
}

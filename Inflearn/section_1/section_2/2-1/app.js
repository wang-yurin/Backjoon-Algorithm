function solution(arr) {
  let result = [];
  result.push(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      result.push(arr[i]);
    }
  }

  return result;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));

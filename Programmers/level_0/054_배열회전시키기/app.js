function solution(numbers, direction) {
  if (direction === "right") {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }
  return numbers;
}

// 오른쪽이면 마지막 인덱스가 맨 앞으로가고 왼쪽이면 맨 앞에 인덱스가 맨 뒤로 간다.

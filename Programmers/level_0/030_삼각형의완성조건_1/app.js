function solution(sides) {
  let result = sides.sort((a, b) => a - b);
  if (result[2] < result[0] + result[1]) {
    return 1;
  } else {
    return 2;
  }
}

// 다른 사람 코드 보면서 느낀 것
// 1. 삼항 연산자 사용해서 코드 길이 줄일 수 있음
// 2. sort 사용하기 전에 생각한 건 Math.max 사용하고 싶었는데 배열에서 값을 어떻게 꺼내는지 고민했었는데 Math.max(...sides) 이렇게 사용 가능한 걸 매번 놓침 ㅠㅠ

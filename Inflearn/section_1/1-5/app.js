console.time();

const list = [5, 3, 7, 11, 2, 15, 17];

function solution(list) {
  // 처음 작성한 코드

  // list.sort((a, b) => {
  //   return a - b;
  // });
  // return list[0];

  let minNum = list[0];

  for (let i = 0; i < list.length; i++) {
    if (minNum > list[i]) {
      minNum = list[i];
    }
  }

  return minNum;
}

console.log(solution(list));
console.timeEnd();

/*
7개의 숫자를 어떻게 받을 것인지?
1. 파라미터로 7개 숫자 받기 
-> 숫자 갯수의 변동이 있을 수 있으니 이건 좋은 방법 같지 않음
2. 배열에 7개 숫자 담아서 파라미터에 배열 넘기기

sort()를 사용할 것인지, for문을 돌릴 것인지
정렬을 한 뒤에 작은 숫자 어떻게 뽑아낼까?
Array.shift()

Array.sort()와 shift()를 사용하여 코드를 작성했는데, sort()는 O(n log n)의 시간 복잡도를, shift()는 O(n)의 시간 복잡도를 갖기 떄문에 최솟값을 찾기 위해 배열을 정렬하는 것은 비효율적이다.

for문을 통해 배열을 한 번만 순회하여 최솟값을 찾을 수 있기에 효율적이다. 시간 복잡도 O(n)
*/

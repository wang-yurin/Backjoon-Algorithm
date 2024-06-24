function solution(arr) {
  let total = 0;

  // 요소의 모든 수 더하기
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let hundred = total - arr[i] - arr[j];

      // 기준 인덱스와 순회하는 인덱스가 같을 때 빼면 안됨
      if (i === j) {
        continue;
      }

      if (hundred === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        break;
      }
    }
  }
  return arr;
}

// const arr = [22, 7, 21, 19, 10, 15, 25, 8, 13];
const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

/*
arr 배열의 모든 요소를 더한다.
모두 더한 값에서 기준 인덱스와 나머지 인덱스를 하나씩 순회하면서 뺀 뒤 100을 만드는 두 수를 찾는다.
찾은 두 수를 배열에서 어떻게 제거하지? Array.splice()

arr 배열의 두 개의 요소를 제거하는 부분에서 막혔던 부분 :
arr.splice()를 사용 했을 때 앞에 있는 요소 splice(i, 1)을 하여 제거한 후 뒤의 요소를 제거하기 위해 splice(j, 1)을 했을 때 이미 앞에서 splice()를 한 상태라 제거한 요소 뒤로 한 칸씩 앞으로 당겨지기 때문에 뒤의 요소를 제거할 때 내가 타겟한 요소가 제거되는게 아니라 그 다음 인덱스가 지워지는 결과가 나옴
앞에서부터 제거하는게 아니라 뒤부터 제거하면 원하는 결과가 출력되었다.
*/

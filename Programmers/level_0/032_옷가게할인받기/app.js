function solution(price) {
  var answer = 0;
  if (price >= 500000) {
    answer = Math.floor(price * 0.8);
  } else if (price >= 300000) {
    answer = Math.floor(price * 0.9);
  } else if (price >= 100000) {
    answer = Math.floor(price * 0.95);
  } else if (price < 100000) {
    return price;
  }
  return answer;
}

// 처음에 조건 제대로 썼는데 몇 개 테스트 케이스 통과 못해서 왜그러나 했더니 제한사항을 잘 봐야하는게 소수점 이하 버린 정수를 리턴하라고 되어있었다. 사실 출력 어떻게 되나 확인 했어야 했는데 조건만 보고 되겠지~ 하고 넘긴게 패착.. 확인하는 습관 들이기
// 테스트 케이스 6에서 계속 실패했는데 10만원 이하일 때 조건을 안써서 그랬던 것 같다.

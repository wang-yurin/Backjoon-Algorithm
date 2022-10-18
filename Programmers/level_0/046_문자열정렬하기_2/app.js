function solution(my_string) {
  var str = my_string.toLowerCase().split("");
  return str.sort().join("");
}

// 문자열은 sort() 빈괄호, 오름차순 내림차순 할 때 reverse()
// 숫자일 떄 매개변수 추가

function solution(strlist) {
  let result = [];
  for (i of strlist) {
    result.push(i.split("").length);
  }
  return result;
}

// 이렇게 풀었는데 map 사용해도 되더라...
// function solution(strlist) {
//   return strlist.map((el) => el.length)
// }

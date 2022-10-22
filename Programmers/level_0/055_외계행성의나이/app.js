function solution(age) {
  let result = [];
  let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  String(age)
    .split("")
    .map((v) => result.push(arr[v]));
  return result.join("");
}

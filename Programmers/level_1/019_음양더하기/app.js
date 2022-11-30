function solution(absolutes, signs) {
  const arr = absolutes.map((num, idx) => {
    return signs[idx] ? num : -num;
  });

  return arr.reduce((acc, cur) => acc + cur, 0);
}

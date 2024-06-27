function solution(str) {
  const half = Math.floor([...str].length / 2);

  return [...str].length % 2 === 0
    ? str.slice(half - 1, half + 1)
    : str.slice(half, half + 1);
}

console.log(solution('study'));
console.log(solution('good'));
console.log(solution('0000110000'));
console.log(solution('000010000'));
console.log(solution('00001210000'));

/*
문자열 일부를 추출하면서 새로운 문자열을 반환하는 String.slice()
*/

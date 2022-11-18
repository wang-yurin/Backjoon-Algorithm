function solution(x) {
  const sumDigit = x
    .toString()
    .split("")
    .reduce((acc, cur) => Number(acc) + Number(cur), 0);
  return x % sumDigit === 0 ? true : false;
}

/*
예전에 푼 건데 다시 푼거랑 비교하면 코드 많이 짧아짐.
function solution(x) {
  let arr = x;
  let answer = true;
  let arrVal = arr.toString().split('')
  let arrValSum = 0;
    for (let i = 0; i < arrVal.length; i++) {
      arrValSum += Number(arrVal[i])    
  }
  if (arr % arrValSum === 0) {
    answer = true;
  } else {
      answer = false;
  }
  return answer;
} 
 */

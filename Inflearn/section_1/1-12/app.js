console.time();
function solution(str) {
  return str.toUpperCase();
}

let str = 'ItisTimeToStudy';
console.log(solution(str));
console.timeEnd();

/*
문자열을 대문자 변환해 반환하는 String.prototype.toUpperCase()
*/

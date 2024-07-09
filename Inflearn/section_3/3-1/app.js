console.time();

function solution(str) {
  let result = '';
  let input = str.toLowerCase();
  input === [...input].reverse().join('')
    ? (result += 'YES')
    : (result += 'NO');
  return result;
}

let str = 'gooG';
console.log(solution(str));
console.timeEnd();

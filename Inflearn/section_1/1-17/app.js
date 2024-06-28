console.time();
function solution(str) {
  return [...new Set(str)].join('\n');
}

let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
console.timeEnd();

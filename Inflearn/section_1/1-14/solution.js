// reduce()
function solution(arr) {
  return arr.reduce((longest, current) =>
    current.length > longest.length ? current : longest
  );
}

// for...of
function solution(arr) {
  let longest = '';

  for (const str of arr) {
    if (str.length > longest.length) {
      longest = str;
    }
  }
  return longest;
}

// sort()
function solution(arr) {
  return arr.sort((a, b) => b.length - a.length)[0];
}

const arr = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(arr));

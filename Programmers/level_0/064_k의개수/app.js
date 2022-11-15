function solution(i, j, k) {
  const numArray = Array(j - i + 1)
    .fill(0)
    .map((_, index) => index + i);
  return numArray.join("").split(k).length - 1;
}

// for 사용하지 않고 어레이 만드는 과정에서 시간이 걸림
// 1부터 시작하는게 아니라 정해진 숫자부터 시작해야해서 Array()안에 들어 가는 값을 고민 함
// 정규표현식을 사용해서 풀고싶은데 고민해야겠음

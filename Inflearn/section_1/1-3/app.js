function solution(N) {
  return Math.ceil(N / 12);

  /*
  반올림을 해야한다 생각해서 아래와 같은 코드 작성했는데 올림을 해야한다.
  학생이 13명일 때 연필 2다스가 필요한데 아래 코드는 1이 출력된다.
  return parseFloat(N / 12).toFixed(0);
  */
}

console.log(solution(13));
console.log(solution(178));

/*
학생 수에서 1다스(12자루)를 나눈 몫이 필요한 연필의 다스 수
나눈 수에서 반올림을 하면 되지 않을까?
=> 올림을 해야함
*/

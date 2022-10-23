function solution(quiz) {
  const results = [];
  for (let i = 0; i < quiz.length; i++) {
    const port = quiz[i].split(" = ");
    const leftPort = port[0].split(" ");
    const num1 = +leftPort[0];
    const num2 = +leftPort[2];
    const operator = leftPort[1];
    let result = 0;
    if (operator === "+") {
      result = num1 + num2;
      if (result === +port[1]) {
        results.push("O");
      } else {
        results.push("X");
      }
    }
    if (operator === "-") {
      result = num1 - num2;
      if (result === +port[1]) {
        results.push("O");
      } else {
        results.push("X");
      }
    }
    // result === +port[1] ? results.push("O") : results.push("X")
  }
  return results;
}
// 다시 풀어보기

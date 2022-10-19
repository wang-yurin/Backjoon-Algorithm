function solution(rsp) {
  let answer = [];
  rsp.split("").map((v) => {
    if (v === "2") {
      v = 0;
      answer.push(v);
    }
    if (v === "0") {
      v = 5;
      answer.push(v);
    }
    if (v === "5") {
      v = 2;
      answer.push(v);
    }
  });
  return answer.join("");
}

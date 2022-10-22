function solution(cipher, code) {
  let arr = cipher.split("");
  return arr.filter((v, i) => (i + 1) % code === 0).join("");
}

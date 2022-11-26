function solution(phone_number) {
  const numArr = phone_number.split("");
  const spliceNum = numArr.splice(-4).join("");
  const star = numArr.join("").replaceAll(/[0-9]/g, "*");
  return star + spliceNum;
}

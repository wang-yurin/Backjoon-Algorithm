function solution(s) {
  const UPPER = s.toUpperCase();
  const numberOfP = UPPER.split("P").length - 1;
  const numberOfY = UPPER.split("Y").length - 1;

  return numberOfP === numberOfY ? true : false;
  return numberOfP && numberOfY === 0 ? true : false;
}

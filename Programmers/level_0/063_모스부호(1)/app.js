const morse = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
};

// function solution(letter) {
//   const letterArray = letter.split(" ");
//   const resultArray = [];
//   letterArray.map((value) => {
//     for (key in morse) {
//       if (value === key) {
//         resultArray.push(morse[key]);
//       }
//     }
//   });
//   return resultArray.join("");
// }

// 첫번째 풀이에서 map과 for와 if가 한번에 있을 필요가 없는데 풀이가 생각이 나지 않아 저렇게 풀었다. 특히 if 필요 없는데!

function solution(letter) {
  const letterArray = letter.split(" ");
  return letterArray.map((value) => morse[value]).join("");
}

// 나름대로 간결하게 줄인 것..

console.time();

function solution(arr) {
  const scores = [];
  let currentRank = 1;

  arr.forEach((value, index) => {
    scores.push({
      score: value,
      rank: null,
      index: index,
    });
  });

  scores.sort((a, b) => b.score - a.score);

  for (let i = 0; i < scores.length; i++) {
    if (i === 0) scores[i].rank = currentRank;
    else {
      if (scores[i].score === scores[i - 1].score) {
        scores[i].rank = scores[i - 1].rank;
      } else {
        currentRank = i + 1;
        scores[i].rank = currentRank;
      }
    }
  }

  scores.sort((a, b) => a.index - b.index);

  const ranks = scores.map((item) => item.rank);

  return ranks;
}
const arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
console.timeEnd();

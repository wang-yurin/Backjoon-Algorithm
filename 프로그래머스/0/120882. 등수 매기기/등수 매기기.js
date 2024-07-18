function solution(score) {
    let average = score.map(v => (v[0] + v[1]) / 2);
    let rank = Array.from({ length: score.length}, () => 1);
    
    for (let i = 0; i < average.length; i++) {
        for (let j = 0; j < average.length; j++) {
            if(average[j] > average[i]) {
                rank[i]++;
            }
        }
    }    
    return rank
}
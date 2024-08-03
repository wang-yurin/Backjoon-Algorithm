function solution(d, budget) {
    let sorted = d.sort((a, b) => a - b)
    let answer = 0;
    for (let i = 0; i < sorted.length; i++) {
        if (budget - sorted[i] >= 0) {
            budget -= sorted[i]
            answer++
        } else break;
    }
    return answer
}
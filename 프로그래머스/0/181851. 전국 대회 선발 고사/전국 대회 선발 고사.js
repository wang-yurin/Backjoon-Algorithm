function solution(rank, attendance) {
    let selected = rank.filter((v, i) => attendance[i] && rank[i]).sort((a, b) => a - b);
    let answer = 0;
    
    for (let i = 0; i < 3; i++) {
        let index = rank.findIndex(v => v === selected[i])
        switch(i) {
            case 0:
                answer += 10000 * index
                break;
            case 1:
                answer += 100 * index
                break;
            case 2:
                answer += index
                break;
        }
    }
    return answer
}
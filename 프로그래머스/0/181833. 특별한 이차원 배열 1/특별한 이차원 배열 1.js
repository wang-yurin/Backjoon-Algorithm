function solution(n) {
    let answer = Array.from({ length : n }, () => [])
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            i === j ? answer[i].push(1) : answer[i].push(0)
        }
    }
    return answer
}
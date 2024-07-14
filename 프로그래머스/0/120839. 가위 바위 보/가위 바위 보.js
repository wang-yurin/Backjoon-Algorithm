function solution(rsp) {
    let answer = [];
    
    [...rsp].map(v => {
        if (+v === 0) answer.push(5)
        else if (+v === 2) answer.push(0)
        else answer.push(2)
    })
    return answer.join('')
}
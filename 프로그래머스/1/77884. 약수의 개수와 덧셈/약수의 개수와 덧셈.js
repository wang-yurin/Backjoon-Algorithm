function solution(left, right) {
    let arr = Array.from({length: right - left + 1}, (_, i) => left + i);
    let answer = 0;
    
    arr.forEach(v => {
        let count = 0;
        for (let i = 1; i <= Math.sqrt(v); i++) {
            if (v % i === 0) {
                count++
                if (i !== v / i) {
                    count++
                }
            }
        }
        count % 2 ? answer -= v : answer += v
    })
    return answer
}
function solution(n, left, right) {
    let result = [];
    
    for (let i = left; i <= right; i++) {
        const row = Math.floor(i / n)
        const col = i % n
        result.push(Math.max(row, col) + 1)
    }
    return result
}

// (signal: aborted (core dumped)) 에러
/*
function solution(n, left, right) {
    const arr = Array.from({length: n}, () => new Array(n))
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = Math.max(i, j) + 1
        }
    }
    
    let result = [];
    arr.forEach((el) => result.push(...el))
    
    return result.slice(left, right + 1)
}
*/
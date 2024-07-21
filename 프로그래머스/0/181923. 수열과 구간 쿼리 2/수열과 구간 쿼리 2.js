function solution(arr, queries) {
    let answer = [];
    queries.forEach(([s, e, k]) => {
        let filtered = arr.filter((v, i) => s <= i && i <= e && k < v)
        filtered.length !== 0 ? answer.push(Math.min(...filtered)) : answer.push(-1)
    })
    return answer
}
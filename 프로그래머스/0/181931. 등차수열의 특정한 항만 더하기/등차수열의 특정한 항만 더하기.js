function solution(a, d, included) {
    let arr = Array.from({ length: included.length }, (_, i) => a + i * d)
    return included.reduce((acc, cur, idx) => {
        return cur ? acc + arr[idx] : acc
    }, 0)
}
function solution(n) {
    let arr = Array.from({ length: 200 }, (_, i) => i + 1)
    return arr.filter(v => v % 3 !== 0 && !v.toString().includes('3'))[n - 1]
}
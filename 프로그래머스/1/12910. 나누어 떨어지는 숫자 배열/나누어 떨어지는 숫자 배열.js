function solution(arr, divisor) {
    let filtered = arr.filter(v => v % divisor === 0);
    return filtered.length !== 0 ? filtered.sort((a, b) => a - b) : [-1]
}
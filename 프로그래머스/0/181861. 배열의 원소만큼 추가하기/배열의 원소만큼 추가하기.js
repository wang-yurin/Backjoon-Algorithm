function solution(arr) {
    return arr.flatMap(v => Array(v).fill(v))
}
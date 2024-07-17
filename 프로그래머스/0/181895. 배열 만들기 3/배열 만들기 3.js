function solution(arr, intervals) {
    return intervals.flatMap(v => arr.slice(v[0], v[1] + 1))
}
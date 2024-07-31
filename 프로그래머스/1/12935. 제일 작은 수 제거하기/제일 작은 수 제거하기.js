function solution(arr) {
    let minNumIdx = arr.indexOf(Math.min(...arr));
    arr.splice(minNumIdx, 1)
    return arr.length ? arr : [-1]
}
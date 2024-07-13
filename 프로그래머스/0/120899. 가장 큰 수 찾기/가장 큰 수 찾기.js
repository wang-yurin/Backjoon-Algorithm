function solution(array) {
    let maxNum = Math.max(...array)
    let index = array.indexOf(maxNum)
    return [maxNum, index]
}
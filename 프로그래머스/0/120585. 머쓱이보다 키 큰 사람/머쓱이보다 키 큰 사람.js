function solution(array, height) {
    let answer = array.filter(v => v > height)
    return answer.length
}
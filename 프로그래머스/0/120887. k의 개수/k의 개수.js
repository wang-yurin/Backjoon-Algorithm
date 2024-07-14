function solution(i, j, k) {
    let numbers = Array(j - i + 1).fill().map((_, idx) => idx + i)
    return numbers.join('').split(k).length - 1
}
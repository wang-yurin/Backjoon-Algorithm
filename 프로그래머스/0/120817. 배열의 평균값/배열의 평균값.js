function solution(numbers) {
    let answer = numbers.reduce((acc, value) => acc + value, 0) / numbers.length
    return answer
}
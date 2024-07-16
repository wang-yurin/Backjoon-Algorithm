function solution(numbers, n) {
    let sum = numbers.reduce((acc, cur) => acc + cur, 0)
    
    for (let i = numbers.length - 1; i > 0; i--) {
        sum -= numbers[i]
        if (sum <= n) {
            sum += numbers[i]
            break;
        }
    }
    return sum
}
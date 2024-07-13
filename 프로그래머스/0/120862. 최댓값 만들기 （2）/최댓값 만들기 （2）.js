function solution(numbers) {
    let temp = [];
    let sorted = numbers.sort((a, b) => a - b);
    
    for (let i = 0; i < sorted.length - 1; i++) {
        temp.push(sorted[i] * sorted[i + 1])
    };
    return Math.max(...temp)
}
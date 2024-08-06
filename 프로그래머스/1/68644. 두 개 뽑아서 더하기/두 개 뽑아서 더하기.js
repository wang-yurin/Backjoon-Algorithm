function solution(numbers) {
    let nums = new Set();
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            nums.add(numbers[i] + numbers[j])
        }
    }
    return [...nums].sort((a, b) => a - b);
}
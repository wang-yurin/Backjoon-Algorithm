function solution(numbers) {
    let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return nums.filter(v => !numbers.includes(v)).reduce((acc, cur) => acc + cur, 0)
}
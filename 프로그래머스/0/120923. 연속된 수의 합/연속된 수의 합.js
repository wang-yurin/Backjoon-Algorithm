function solution(num, total) {
    let nums = Array.from({ length: num }, (_, i) => i + 1);
    let sum = nums.reduce((acc, cur) => acc + cur, 0);
    
    while (sum !== total) {
        if (sum < total) {
            nums = nums.map(v => v + 1);
        } else {
            nums = nums.map(v => v - 1);
        }
        sum = nums.reduce((acc, cur) => acc + cur, 0);
    }
    return nums
}
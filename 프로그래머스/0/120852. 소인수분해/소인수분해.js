function solution(n) {
    let nums = [];
    let num = n;
    let i = 2;
    
    while (num !== 1) {
        if (num % i === 0) {
            num = num / i
            nums.push(i)
        }
        else i++
    }
    let answer = new Set(nums)
    return [...answer]
}
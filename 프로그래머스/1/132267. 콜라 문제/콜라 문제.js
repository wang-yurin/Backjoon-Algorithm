function solution(a, b, n) {
    let rest = n;
    let total = 0;
    while (rest >= a) {
        total += Math.floor(rest / a) * b
        rest = (Math.floor(rest / a) * b) + (rest % a)
    }
    return total
}
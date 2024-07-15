function solution(n) {
    let factor = 1;
    let i = 1;
    
    while (factor < n) {
        i++
        factor *= i
    }
    
    return factor === n ? i : i - 1
}
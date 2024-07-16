function solution(a, b) {
    let num = Number(String(a) + String(b));
    return num > (2 * a * b) ? num : 2 * a * b
}
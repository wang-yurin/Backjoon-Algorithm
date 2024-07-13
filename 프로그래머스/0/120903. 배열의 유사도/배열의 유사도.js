function solution(s1, s2) {
    let count = 0;
    s1.map(v => s2.includes(v) ? count++ : count)
    return count;
}
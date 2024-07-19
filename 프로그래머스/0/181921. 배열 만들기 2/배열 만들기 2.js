function solution(l, r) {
    let answer = Array.from({ length: r - l + 1 }, (_, i) => i + l).filter(v => /^[05]+$/.test(v.toString()));
    return answer.length > 0 ? answer : [-1]
}
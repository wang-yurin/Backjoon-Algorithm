function solution(sides) {
    let [a, b] = sides
    return (a + b) - Math.abs(a - b) - 1
}
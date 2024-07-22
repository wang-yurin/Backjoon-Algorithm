function solution(dots) {
    let x = dots.map(v => v[0]);
    let y = dots.map(v => v[1]);
    
    return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
}
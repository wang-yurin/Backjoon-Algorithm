function solution(polynomial) {
    let x = 0;
    let num = 0;
    let eq = polynomial.split(' + ')
    
    eq.forEach(v => {
       if (v.endsWith('x')) {
           v.slice(0, v.length - 1) !== '' 
           ? x += +(v.slice(0, v.length - 1))
           : x += 1
        } else {
            num += +v
        }
    })
    
    let answer = [];
    if (x > 0) {
        answer.push(x === 1 ? 'x' : `${x}x`)
    }
    if (num > 0) {
        answer.push(num)
    }
    
    return answer.join(' + ')
}
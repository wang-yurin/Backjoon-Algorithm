function solution(s){
    let p = 0;
    let y = 0;
    
    for (let char of s.toUpperCase()) {
        if (char === 'P') p++
        else if (char === 'Y') y++
    }
    return p === y
}
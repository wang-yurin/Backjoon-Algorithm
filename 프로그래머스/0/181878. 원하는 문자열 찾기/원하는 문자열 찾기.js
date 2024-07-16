function solution(myString, pat) {
    let str = myString.toLowerCase();
    let str2 = pat.toLowerCase();
    
    return str.includes(str2) ? 1 : 0
}
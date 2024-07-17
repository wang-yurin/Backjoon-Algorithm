function solution(arr) {
    let a = arr.indexOf(2)
    let b = arr.lastIndexOf(2)
    
    if (a === -1 || b === -1) return [-1]
    return arr.slice(a, b + 1)
}
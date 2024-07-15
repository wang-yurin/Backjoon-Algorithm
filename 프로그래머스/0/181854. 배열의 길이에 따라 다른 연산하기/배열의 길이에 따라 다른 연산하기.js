function solution(arr, n) {
    let length = arr.length;
    let answer;
    
    if (length % 2 === 0) {
        answer = arr.map((v, i) => {
            return i % 2 !== 0 ? v + n : v
        })
    } else {
        answer = arr.map((v, i) => {
            return i % 2 === 0 ? v + n : v
        })
    }
    
    return answer
}
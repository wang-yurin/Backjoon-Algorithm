function solution(arr, k) {
    let set = new Set(arr)
    
    let answer = [...set].slice(0, k)

    if (answer.length !== k) {
        return answer.concat(Array(k - answer.length).fill(-1))
    }
    return answer
}
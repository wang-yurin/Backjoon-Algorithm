function solution(arr) {
    let answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (answer.length === 0) answer.push(arr[0])
        else {
            if (answer[answer.length - 1] !== arr[i]) answer.push(arr[i])
        }
    }
    return answer
}
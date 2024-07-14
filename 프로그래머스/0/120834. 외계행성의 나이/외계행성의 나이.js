function solution(age) {
    let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    let answer = ''
    
    for (let i = 0; i < String(age).length; i++) {
        answer += arr[String(age)[i]]
    }
    return answer
}
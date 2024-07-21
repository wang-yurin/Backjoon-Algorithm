function solution(picture, k) {
    let answer = []
    let arr = picture.map(el => el.split('').map(v => v.repeat(k)).join(''))
    arr.forEach(el => { 
        for (let i = 0; i < k; i++) {
        answer.push(el)
        }
    })
    return answer
}
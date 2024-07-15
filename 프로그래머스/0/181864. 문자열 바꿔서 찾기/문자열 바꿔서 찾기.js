function solution(myString, pat) {
    let str = myString.replace(/A/g, '#').replace(/B/g, 'A').replace(/#/g, 'B')
    return str.includes(pat) ? 1 : 0
}
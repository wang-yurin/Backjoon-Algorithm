function solution(n) {
    let oneLen = n.toString(2).match(/1/g).length
    let temp = n
    let tempLen;
    while(oneLen !== tempLen) {
        temp++
        tempLen = temp.toString(2).match(/1/g).length
    }
    return temp
}
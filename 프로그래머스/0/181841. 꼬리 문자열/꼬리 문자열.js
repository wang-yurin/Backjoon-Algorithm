function solution(str_list, ex) {
    let answer = ''
    
    str_list.forEach(v => v.includes(ex) ? null : answer += v)
    return answer
}
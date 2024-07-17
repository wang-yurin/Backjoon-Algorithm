function solution(my_string) {
    let str = my_string.split(' ')
    
    return str.reduce((acc, cur, i) => {
        if (cur === '+') {
            return Number(acc) + Number(str[i + 1])
        } else if (cur === '-') {
            return Number(acc) - Number(str[i + 1])
        } else return Number(acc)
    })
}
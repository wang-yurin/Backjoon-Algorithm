function solution(my_string, m, c) {
    return my_string.match(new RegExp(`.{1,${m}}`, 'g')).map((v, i) => v[c - 1]).join('')
}
function solution(my_string, s, e) {
    let str = [...my_string].slice(s, e + 1).reverse().join('')
    let remove = my_string.slice(s, e + 1)
    return my_string.replace(remove, str)
}
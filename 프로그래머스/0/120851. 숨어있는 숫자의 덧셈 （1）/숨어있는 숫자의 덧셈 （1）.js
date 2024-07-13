function solution(my_string) {
    return my_string.replaceAll(/[a-zA-Z]/g, '').split('').reduce((acc, cur) => Number(acc) + Number(cur), 0)
}
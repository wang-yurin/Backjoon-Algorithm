function solution(my_string) {
    let lowerCase = my_string.toLowerCase();
    return [...lowerCase].sort((a, b) => a.localeCompare(b)).join('')
}
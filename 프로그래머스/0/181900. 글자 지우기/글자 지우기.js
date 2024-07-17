function solution(my_string, indices) {
    let str = my_string.split('');
    indices.sort((a, b) => b - a);
    
    for (v of indices) {
        str.splice(v, 1)
    }
    return str.join('')
}
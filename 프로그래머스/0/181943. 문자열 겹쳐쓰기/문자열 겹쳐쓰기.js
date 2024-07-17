function solution(my_string, overwrite_string, s) {
    let end = overwrite_string.length;
    let str = my_string.split('');
    str.splice(s, end, overwrite_string);
    return str.join('')
}
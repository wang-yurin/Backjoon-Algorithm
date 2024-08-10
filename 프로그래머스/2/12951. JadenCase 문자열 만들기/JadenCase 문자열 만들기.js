function solution(s) {
    return s.split(' ').map(str => {
        let arr = str.split('');
        let upper = arr.splice(0, 1).join('').toUpperCase();
        let rest = arr.join('').toLowerCase();
        return upper + rest
    }).join(' ')
}
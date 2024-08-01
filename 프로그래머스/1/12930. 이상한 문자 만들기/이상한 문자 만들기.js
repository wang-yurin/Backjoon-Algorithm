function solution(s) {
    return s.split(' ').map((v, i) => {
        return v.split('').map((char, i) => {
            return i % 2 ? char.toLowerCase() : char.toUpperCase()
        }).join('');
    }).join(' ');
}
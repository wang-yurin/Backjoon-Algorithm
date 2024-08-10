function solution(s) {
    let count = 0;
    let length = 0;
    
    while (s !== '1') {
        let len = s.split('0').join('').length;
        length += s.length - len;
        s = len.toString(2);
        count++
    }
    return [count, length]
}
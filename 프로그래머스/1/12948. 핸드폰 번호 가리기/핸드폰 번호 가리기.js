function solution(phone_number) {
    let arr = phone_number.split('');
    let digits = arr.splice(-4, 4);
    
    return arr.join('').replaceAll(/[0-9]/g, '*') + digits.join('')
}
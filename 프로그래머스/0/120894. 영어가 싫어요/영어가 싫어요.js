function solution(numbers) {
    let strNums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    strNums.forEach((v, i) => {
        numbers = numbers.split(v).join(i)
        return numbers
    })
    
    return Number(numbers)
}
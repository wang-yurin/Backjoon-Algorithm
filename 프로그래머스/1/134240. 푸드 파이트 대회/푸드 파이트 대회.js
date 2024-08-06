function solution(food) {
    let left = '';
    for (let i = 1; i < food.length; i++) {
        let count = parseInt(food[i] / 2)
        if (count > 0) {
            left += i.toString().repeat(count)
        }
    }
    let right = left.split('').reverse().join('');
    return left + '0' + right
}
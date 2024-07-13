function solution(money) {
    let cup = Math.trunc(money / 5500)
    let balance = money - (5500 * cup)
    
    return [cup, balance]
}
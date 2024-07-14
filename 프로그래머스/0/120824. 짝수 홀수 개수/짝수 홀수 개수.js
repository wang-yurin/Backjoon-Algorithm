function solution(num_list) {
    let odd = num_list.filter(v => v % 2 !== 0)
    let even = num_list.filter(v => v % 2 === 0)
    
    return [even.length, odd.length]
}
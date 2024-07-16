function solution(num_list) {
    let even = num_list.filter(v => v % 2 === 0).join('')
    let odd = num_list.filter(v => v % 2 !== 0).join('')
    
    return parseInt(even) + parseInt(odd)
}
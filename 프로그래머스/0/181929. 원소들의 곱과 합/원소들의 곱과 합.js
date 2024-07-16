function solution(num_list) {
    let times = num_list.reduce((acc, cur) => acc * cur);
    let square = Math.pow(num_list.reduce((acc, cur) => acc + cur, 0), 2);
    
    return times < square ? 1 : 0
}
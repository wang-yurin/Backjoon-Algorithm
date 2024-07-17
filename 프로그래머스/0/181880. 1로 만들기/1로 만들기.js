function solution(num_list) {
    let count = 0;
    
    num_list.forEach(v => {
        let num = v;
        while (num !== 1) {
            if (num % 2 === 0) {
                num = num / 2
                count++
            }
            else {
                num = (num - 1) / 2
                count++
            }
        }
    })
    return count
}
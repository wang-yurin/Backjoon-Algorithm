function solution(common) {
    let d;
    
    if (common[1] % common[0] === 0 && common[2] % common[1] === 0) {
        d = common[1] / common[0]
        return common[common.length - 1] * d
    } else {
        d = common[1] - common[0]
        return common[common.length - 1] + d
    }
}
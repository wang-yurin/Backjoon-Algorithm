function solution(strArr) {
    let group = strArr.reduce((acc, cur) => {
        let length = cur.length
        
        if (!acc[length]) {
            acc[length] = [];
        }
        acc[length].push(cur)
        return acc
    }, {});
    
    return Math.max(...Object.values(group).map(v => v.length))
}
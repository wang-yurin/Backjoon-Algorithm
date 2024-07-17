function solution(arr, flag) {
    let X = [];
    
    flag.forEach((v, i) => {
        v ? X.push(...arr[i].toString().repeat(arr[i] * 2)) : X.splice(-arr[i])
    })
    return X.map(Number)
}
function solution(array, n) {
    let diff = Math.abs(n - array[0]);
    let curr = array[0]
    
    array.forEach(v => {
        let currentDiff = Math.abs(n - v)
        if (diff > currentDiff) {
            diff = currentDiff
            curr = v
        } else if (diff === currentDiff && v < curr) {
            curr = v
        }
    })
    return curr
}


function solution(arr) {
    let count = 0;
    let hasChanged = true;
    
    while (hasChanged) {
        hasChanged = false;
        
        arr = arr.map(v => {
            if (v >= 50 && v % 2 === 0) {
                hasChanged = true;
                return v / 2;
            }
            else if (v < 50 && v % 2 !== 0) {
                hasChanged = true;
                return v * 2 + 1;
            }
            else {
                return v;
            }
        });
        count++;
    }
    return count - 1
}
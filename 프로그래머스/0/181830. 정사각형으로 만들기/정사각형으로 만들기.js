function solution(arr) {
    const row = arr.length;
    const col = arr[0].length;
        if (row > col) {
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < row - col; j++) {
                arr[i].push(0)
            }
        }
    }
    else if (row < col) {
        for (let i = 0; i < col - row; i++) {
            arr.push(Array.from({length : col}).fill(0))
        }
    }
    return arr
}
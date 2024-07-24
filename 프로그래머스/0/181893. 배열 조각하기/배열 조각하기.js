function solution(arr, query) {
    query.forEach((v, i) => {
        if (i % 2 === 0) {
            arr.splice(query[i] + 1)
        }
        else {
            arr.splice(0, query[i])
        }
    })
    return arr
}
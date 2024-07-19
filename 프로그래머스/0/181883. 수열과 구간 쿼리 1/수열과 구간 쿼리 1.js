function solution(arr, queries) {
    queries.forEach(el => {
        let [s, e] = [...el]      
        
        for (let i = s; i <= e; i++) {
            arr[i]++
        }
    })
    return arr
}
function solution(arr, queries) {
    queries.forEach(el => {
        let [i, j] = [...el];
        let temp = arr[i];
                       
        arr[i] = arr[j];
        arr[j] = temp;
    })
    return arr
}
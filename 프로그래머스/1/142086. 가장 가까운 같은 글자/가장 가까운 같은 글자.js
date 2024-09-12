function solution(s) {
    let arr = s.split('').reverse();
    let result = [];
    
    for(let i = 0; i < arr.length; i++) {
        let compare = arr.slice(i + 1)
        let index = compare.indexOf(arr[i]);
        result.push(index === -1 ? index : index + 1);
    }
    return result.reverse()
}
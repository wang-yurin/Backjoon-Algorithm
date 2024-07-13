function solution(array) {
    let sortedArray = [...array].sort((a, b) => a - b)
    let half = Math.trunc(sortedArray.length / 2)
    
    return sortedArray[half]
}

/*
* 오름차순 정렬
* 중앙값 리턴
*/
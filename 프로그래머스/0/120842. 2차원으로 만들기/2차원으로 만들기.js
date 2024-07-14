function solution(num_list, n) {
    return num_list.reduce((acc, cur, idx) => {
        if (idx % n === 0) acc.push([])
        acc[acc.length - 1].push(cur)
        return acc
    }, [])
}
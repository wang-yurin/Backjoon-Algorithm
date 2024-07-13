function solution(strlist) {
    return strlist.reduce((acc, cur) => {
        acc.push(cur.length)
        return acc
    }, [])
}
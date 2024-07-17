function solution(my_string, queries) {
    let str = my_string.split('')
    queries.map(v => {
        let rev = str.slice(v[0], v[1] + 1).reverse()
        str.splice(v[0], rev.length, ...rev)
    })
    return str.join('')
}
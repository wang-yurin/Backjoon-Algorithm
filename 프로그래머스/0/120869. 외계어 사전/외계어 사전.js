function solution(spell, dic) {
    let word = spell.sort().join('')
    
    for (let el of dic) {
        if (el.split('').sort().join('') === word) return 1
    }
    return 2
}
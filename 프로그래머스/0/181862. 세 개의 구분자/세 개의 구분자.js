function solution(myStr) {
    let str = myStr.split(/[abc]/g).filter(v => v);
    return str.length !== 0 ? str : ['EMPTY']
}
function solution(n, k) {
    let lamb = n * 12000
    let beverage = (k - Math.floor(n / 10)) * 2000
    return lamb + beverage
}

/*
* k에 서비스로 받은 음료 개수 포함?
*/
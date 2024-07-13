function solution(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) count++
    }
    return count;
}

/*
* 두 숫자의 곱이 n인 자연수
* n = a * b
*/